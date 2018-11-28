import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Message extends Component {
  render () {


    return (
      <div>
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
          <span className="message-content">{this.props.message.type}</span>
      </div>);

          }
        }

export default Message;