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
  cleanMsg.type = 'normalmsg';
  return cleanMsg;
};

createNotification = (message) => {
  message.id = uuidv4();
  message.type = 'normalmsg';
  const cleanMsg = JSON.parse(message);
  return cleanMsg;
};

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(data) {
    wss.broadcast(createMessage(data));
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});