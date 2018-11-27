import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

class MessageList extends Component {



  render () {

      const msgItem = this.props.messagesFromApp.map(message => (
      <Message message={message} />
      ));

    return (
      <main className="messages">

      {msgItem}

      </main>
      );
    }
  }


export default MessageList;
