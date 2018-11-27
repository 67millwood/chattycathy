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
    // After 3 seconds, set `loading` to false in the state.
    setTimeout(() => {
      this.setState({loading: false}); // this triggers a re-render!
    }, 3000)
  }

  render() {
    return (
      <body>
      <nav className="navbar">
        <a href="/" className="navbar-brand">🦋 AssChat with Cathi 🦋</a>
      </nav>

      <MessageList messagesFromApp={this.state.messages}/>



      <ChatBar currentUser={this.state.currentUser}/>

      </body>
    );
  }
}
export default App;
