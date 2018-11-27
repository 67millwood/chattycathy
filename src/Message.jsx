import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Message extends Component {
  render () {


    return (
      <div>
          <span className="message-username">Big Boy 50</span>
          <span className="message-content">{this.props.message.content}</span>

      </div>);

          }
        }

export default Message;