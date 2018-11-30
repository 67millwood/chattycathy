import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*Message is a child component of MessageList and App which takes its props from MessageList in order to format all the messages
It returns all messages after applying the correct CSS for notification v. regular messages.
*/
class Message extends Component {
  render () {

    const styleObject = { color: 'DodgerBlue'};

    if (this.props.message.type === 'incomingNotification') {
      return (
        <div>
            <span className="notification-content">{this.props.message.content}</span>
        </div>
            )
    } else {
    return (
      <div>
          <span className="message-username" style={styleObject}>{this.props.message.username}</span>
          <span className="message-content" >{this.props.message.content}</span>
      </div>);

          }
        }
      }
export default Message;