import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Messages extends Component {
  render () {
    return (
      <div>
    <span className="message-content">this will be a message.</span>
      <div className="message-system">
    this is a notification
  </div>
    </div>);

}
}

export default Messages;