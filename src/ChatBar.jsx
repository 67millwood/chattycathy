import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ChatBar extends Component {
  render() {

    const onSubmit = evt => {
      evt.preventDefault();
      const messageInput = evt.target.elements.msgName;
    //   // const nameInput = evt.target.elements.name;

    //   // Here, we call the function we were sent
      this.props.addMsg(messageInput.value);

      messageInput.value = "";
    };

    const onSubmitUser = evt => {
      evt.preventDefault();
      const nameInput = evt.target.elements.name;
      this.props.newUsr(nameInput.value);
      console.log(nameInput);

    };

    return (
        <footer className="chatbar">

          <form onSubmit={onSubmitUser}>
          <input className="chatbar-username" name="name" placeholder="Your Name (Optional)" />
          <button id="newmsginput" type="submit">Add</button>
          </form>

          <form onSubmit={onSubmit}>
          <input  className="chatbar-message" name="msgName" placeholder="Type a message and hit ENTER" />
          <button id="newmsginput" type="submit">Add</button>
          </form>
        </footer>
          );
        }
      }

export default ChatBar;