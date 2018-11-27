import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Messages from './Message.jsx';

class MessageList extends Component {
  render () {

    return (
      <main className="messages">
      <Messages/>
      </main>
      );
    }
  }


export default MessageList;
