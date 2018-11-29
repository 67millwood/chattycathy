import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket(`ws://localhost:3001/`);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [],
  usersOnline: 0
};

  }
componentDidMount() {
  console.log("componentDidMount <App />");
  this.socket.onopen = function(event) {
    console.log("connect to the server");
  }

  this.socket.onmessage = (event) => {
    const niceMsg = (JSON.parse(event.data));
    // console.log(niceMsg);
    // console.log(niceMsg.type);
    // console.log(niceMsg.id);
    if (niceMsg.type !== 'incomingNotification' || 'incomingMessage') {
      this.setState({usersOnline: niceMsg})
    } else {
    const msg = {
      username: niceMsg.username,
      content: niceMsg.content,
      type: niceMsg.type,
      id: niceMsg.id
    };

    const oldmsgNames = this.state.messages;
    const newmsgNames = [...oldmsgNames, msg];
    this.setState({messages: newmsgNames})
  }
  }

  setTimeout(() => {

  }, 3000);
}

 newUsr =(usr) => {
      // const newName = this.state.currentUser.name;
     this.setState({currentUser: {name: usr}});
     const notifyNameChange = {
      type: 'postNotification',
      content: `${this.state.currentUser.name} has changed their name to ${usr}`
     }
     this.socket.send(JSON.stringify(notifyNameChange));
    };

 addMsg =(msg) => {
    const newThing = {
      type: 'postMessage',
      username: this.state.currentUser.name,
      content: msg,
    };
    this.socket.send(JSON.stringify(newThing));
  }

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
