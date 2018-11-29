import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Message extends Component {
  render () {

    if (this.props.message.type === 'incomingNotification') {
      return (
        <div>
            <span className="notification-content">{this.props.message.content}</span>
        </div>
            )
    } else {
    return (
      <div>
          <span className="message-username">{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
      </div>);

          }
        }
      }
export default Message;