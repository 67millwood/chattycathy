import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
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
  const superSocket = new WebSocket("ws://localhost:3001/");
  setTimeout(() => {

    // Add a new message to the list of messages in the data store
    //const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    // this.setState({messages: messages})
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
    this.setState({ messages: newmsgNames });
  }

  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">🦋 AssChat with Cathi 🦋</a>
      </nav>

      <MessageList messagesFromApp={this.state.messages}/>


      <ChatBar currentUser={this.state.currentUser} addMsg={this.addMsg}/>

      </div>
    );
  }
}
export default App;
