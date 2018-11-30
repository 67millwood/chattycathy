import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

/*MessageList is a simple child component of App which takes its prop from App with the message content and sends it to its Child component Messages
It returns a list of all messages
*/
class MessageList extends Component {

  render () {
      const msgItem = this.props.messagesFromApp.map(message => (
      <Message key={message.id} message={message} />
      ));

    return (
      <main className="messages">
      {msgItem}
      </main>
      );
    }
  }

export default MessageList;
