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

//function to take in all types of data, convert to a string for sending back to client, then sends to client
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(data));
  });
};

//function for regular messages to add a unique ID and message type so regular messages and notifications can be displayed differently
createMessage = (message) => {
  const cleanMsg = JSON.parse(message);
  cleanMsg.id = uuidv4();
  cleanMsg.type = 'incomingMessage';
  return cleanMsg;
};

//function for notificaiton messages to add a unique ID and message type so regular messages and notifications can be displayed differently
createNotification = (notification) => {
  const cleanNotify = JSON.parse(notification);
  cleanNotify.id = uuidv4();
  cleanNotify.type = 'incomingNotification';
  return cleanNotify;
};

//function for updating the user count. Adds a unique ID and message type so it is not published into the stream of messages
updateCount = (count) => {
  const cleanNum = {};
  cleanNum.count = count;
  cleanNum.id = uuidv4();
  cleanNum.type = 'count';
  return cleanNum;
};

/*functions to control actions once a connection is established
 - first broadcast is called with updateCount (both above) to send a message to the client with the total number of all clients connected
 - when a message comes into the server the data is parsed, and the type is assessed as either a 'notification' or 'regular' message
 - once assessed the content is processed by createMessage or createNotification and then broadcast is called to send the message to the client
 - if a client disconnects, broadcast is called to send an updated user count to the client
*/
wss.on('connection', (ws) => {
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
    wss.broadcast(updateCount(wss.clients.size));
});
  //
});