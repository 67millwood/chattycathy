import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket(`ws://localhost:3001/`);
    this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
};

  }
componentDidMount() {
  console.log("componentDidMount <App />");
  this.socket.onopen = function(event) {
    console.log("connect to the server");
  }

  this.socket.onmessage = (event) => {
    const niceMsg = (JSON.parse(event.data));
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

  setTimeout(() => {

  }, 3000);
}

 newUsr =(usr) => {
     this.setState({currentUser: {name: usr}});
    };

 addMsg =(msg) => {
    const newThing = {
      username: this.state.currentUser.name,
      content: msg,
      // id: Math.random()
    };
    this.socket.send(JSON.stringify(newThing));
  }

  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand"> A🦋Chat with 🐶&🕷 </a>
      </nav>

      <MessageList messagesFromApp={this.state.messages}/>


      <ChatBar currentUser={this.state.currentUser} addMsg={this.addMsg} newUsr={this.newUsr} />

      </div>
    );
  }
}
export default App;
