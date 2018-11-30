# Chatty App

Chatty App is a simple chat app.  It was renamed to include emojis for enteratinment purposes.

Users are provided single page app where they can choose a username and write messages.  All messages created will publish to the screen on ENTER keypress.  Users can enter a new name to be attached to all messages.  Any user who has access to the site will see near instant publication of their messages as well as those using the site (see screenshots simulating three users having a conversation).  Additionally, there is a live count of users connected to the site that will change dynamically as new users connect and disconnect.  The app is built on a React and Websocket base.

## Dependencies

devDependencies:
    - "babel-core": "6.23.1",
    - "babel-loader": "6.3.1",
    - "babel-preset-es2015": "6.22.0",
    - "babel-preset-react": "6.23.0",
    - "babel-preset-stage-0": "6.22.0",
    - "css-loader": "0.26.1",
    - "eslint": "3.15.0",
    - "eslint-plugin-react": "6.9.0",
    - "node-sass": "4.5.0",
    - "sass-loader": "6.0.0",
    - "sockjs-client": "^1.1.2",
    - "style-loader": "0.13.1",
    - "webpack": "2.2.1",
    - "webpack-dev-server": "2.3.0"


dependencies:
    - "express": "4.16.4",
    - "react": "15.4.2",
    - "react-dom": "15.4.2",
    - "uuid": "^3.3.2",
    - "ws": "6.1.2"

## Getting Started

1. Install all dependencies
2. Navigate to the chatty_server directory and run: node server.js
3. In a seperate console, navigate to the root directory and type:  npm start.
4. Open mulitple browser windows and navigate to:  localhost:3000
5. Choose different usernames in each window and type messages into each to see real time updates across all browsers
6. Note the 'Users Online' count increases and decreases with new connected users.`
7. Enjoy!

## Functionality

Messages:
- user types content into message box and presses enter
- client sends message to server, it is tagged with a message type telling the sever it is a regular message
- server assigns a unique ID to the message and returns a string to the client
- client formats the message with CSS and publishes content to the screen
- all connected users see the new message and the username of the person who created it

Notifications:
- a user changes their name by typing it into the provides text box and presses enter
- server is notified of the name change, assigns a unique id and send it back to the client App to be published.
- all connected users see a notification of the name change

Users online:
- websocket server logs when users connect to the site and publishes (wss.clients.size) which gives the total number of connected users
- server also logs users when they disconnect and then updates the number of users online in real time

## File Structure

Important folders and files are indicated in the tree diagram below:

<ul>
  <li>/react-simple-boilerplate:  holdover name for React driven app Chatty</li>
  <ul>
    <li>/build: contains images</li>
    <li>/chatty_server</li>
    <ul>
      <li>server.js: runs the express server and websocket functionality on port 3001</li>
    </ul>
    <li>/src</li>
    <ul>
      <li>App.jsx: the Parent component that communicates with the websocket server</li>
      <li>ChatBar.jsx: child component to App which takes user content for username and messages</li>
      <li>Message.jsx: child component to MessageList which renders styling on messages</li>
      <li>MessageList.jsx: Parent to Messages, child to App is the container for the message log</li>
    </ul>
    <li>/styles</li>
    <ul>
      <li>application.scss </li>
      <li>home.scss: main css file for styling</li>
    </ul>
    <li>index.html: shell for the dynamically created HTML via React components</li>
    <li>package.json</li>
    <li>README.md</li>
    <li>server.js: simple server that runs the app on port 3000 </li>
    <li>webpack.config.js: webpack setup files</li>
  </ul>
</ul>



## Screenshots

#### Message Log:

![alt text](build/messagedetails.png)

#### Multi User Chat:
![alt text](build/3userchat.png)

#### New Users and User Count:
![alt text](build/4users.png)



