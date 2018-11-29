// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(data));
  });
};


createMessage = (message) => {
  const cleanMsg = JSON.parse(message);
  cleanMsg.id = uuidv4();
  cleanMsg.type = 'incomingMessage';
  // console.log(cleanMsg);
  return cleanMsg;
};

createNotification = (notification) => {
  const cleanNotify = JSON.parse(notification);
  cleanNotify.id = uuidv4();
  cleanNotify.type = 'incomingNotification';
  // console.log(cleanNotify);
  return cleanNotify;
};

updateCount = (count) => {
  const cleanNum = {};
  cleanNum.count = count;
  cleanNum.id = uuidv4();
  cleanNum.type = 'count';
  return cleanNum;
}

wss.on('connection', (ws) => {
  console.log(`Clients connected ${wss.clients.size}`);
  wss.broadcast(updateCount(wss.clients.size));
  ws.on('message', function incoming(data) {
    const clean = JSON.parse(data)
    if (clean.type === 'postMessage') {
    wss.broadcast(createMessage(data));
  } else {
    wss.broadcast(createNotification(data))
  }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log(`Clients connected ${wss.clients.size}`);
    wss.broadcast(updateCount(wss.clients.size));
});
  //
});