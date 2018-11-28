import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket(`ws://localhost:3001/`);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

  }
componentDidMount() {
  console.log("componentDidMount <App />");
  this.socket.onopen = function(event) {
    console.log("connect to the server");
  }
  this.socket.onmessage = function(event) {
    console.log(event.data);
  }
  setTimeout(() => {

  }, 3000);
}

 addMsg =(msg) => {
    const newThing = {
      username: this.state.currentUser.name,
      content: msg,
      id: Math.random()
    };
    const oldmsgNames = this.state.messages;
    const newmsgNames = [...oldmsgNames, newThing];
    this.socket.send("gfy");
  }

  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">🦋 AssChat with Cathi 🦋</a>
      </nav>

      <MessageList messagesFromApp={this.state.messages}/>


      <ChatBar currentUser={this.state.currentUser} addMsg={this.addMsg} />

      </div>
    );
  }
}
export default App;
