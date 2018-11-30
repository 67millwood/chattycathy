import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

//main application that controls communication with the Server
//set the State for key variables: currentUser, message log and # of users online
class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket(`ws://localhost:3001/`);
    this.state = {
      currentUser: {name: "Anonymous"},
      messages: [],
      usersOnline: 0,
      userColor: 'SlateBlue'
    };
  }

//post connection to the server this function serves as the reciever of messages from the server and sends messages to the other components for display
  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket.onopen = function(event) {
      console.log("connect to the server");
    }

    //on receiving a message from the server, the function parsing the incoming JSON, checks to see what type of message is incoming and either resets the user count or sends a message to the display

    this.socket.onmessage = (event) => {
      const niceMsg = (JSON.parse(event.data));
      console.log(niceMsg);
      console.log(this.state.userColor);
        if (niceMsg.type === 'count') {
          this.setState({usersOnline: niceMsg.count});
          this.setState({userColor: niceMsg.color})
        } else {
        const msg = {
          username: niceMsg.username,
          color: this.state.userColor,
          content: niceMsg.content,
          type: niceMsg.type,
          id: niceMsg.id
        };

    //the messages sit in an array.  messages and system notifications both append the array and this becomes the new State for messages.
      const oldmsgNames = this.state.messages;
      const newmsgNames = [...oldmsgNames, msg];
      this.setState({messages: newmsgNames})
      }
    }

  setTimeout(() => {}, 3000);
  }

    //newUser is a function that takes input from ChatBar.jsx if the name field changes.  It sends the content to the server via 'this.socket' after first changing the content to a string.

         newUsr =(usr) => {
              // const newName = this.state.currentUser.name;
             this.setState({currentUser: {name: usr}});
             const notifyNameChange = {
              type: 'postNotification',
              content: `${this.state.currentUser.name} has changed their name to ${usr}`
             }
             this.socket.send(JSON.stringify(notifyNameChange));
            };

    //addMsg is a function that takes input from ChatBar.jsx when a new message is submitted.  It sends the content to the server via 'this.socket' after first changing the content to a string.

         addMsg =(msg) => {
            const newThing = {
              type: 'postMessage',
              username: this.state.currentUser.name,
              content: msg,
            };
            this.socket.send(JSON.stringify(newThing));
          }

    /*render controls the display to the end user as well sends data on the State to the Child components.
      - MessageList is sent the message log
      - ChatBar is sent the current username and the two functions necessary to process new messages (addMsg) and new users (newUsr)
    */

          render() {
            return (
              <div>
              <nav className="navbar">
                <a href="/" className="navbar-brand"> A🦋Chat with 🐶&🕷 </a>
                <p id="usercount">Users Online: {this.state.usersOnline}</p>
              </nav>


              <MessageList messagesFromApp={this.state.messages}/>


              <ChatBar currentUser={this.state.currentUser} addMsg={this.addMsg} newUsr={this.newUsr} />

              </div>
              );
            }
          }
export default App;
