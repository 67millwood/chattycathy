import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ChatBar extends Component {
  render() {

    const onSubmit = evt => {
      evt.preventDefault();
      const messageInput = evt.target.elements.msgName;
      // const nameInput = evt.target.elements.name;

      // Here, we call the function we were sent
      this.props.addMsg(messageInput.value/*, nameInput.value*/);

      messageInput.value = "";
    };

    return (
        <footer className="chatbar">

          <input className="chatbar-username" name="name" placeholder="Your Name (Optional)" />
          <form onSubmit={onSubmit}>
          <input  className="chatbar-message" name="msgName" placeholder="Type a message and hit ENTER" />
          <button id="newmsginput" type="submit">Add</button>
          </form>
        </footer>
          );
        }
      }

export default ChatBar;