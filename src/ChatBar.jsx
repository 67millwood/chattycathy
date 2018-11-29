import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*ChatBar component has responsiblity for:
 - accepting usernames
 - accepting messages
 There are two functions for processing the content from two forms
*/
class ChatBar extends Component {
  render() {

    /*function to accept new messages from the form below and use the content in the addMsg function (defined in App) for sending to the server from the Parent*/
    const onSubmit = evt => {
      evt.preventDefault();
      const messageInput = evt.target.elements.msgName;
      this.props.addMsg(messageInput.value);
      messageInput.value = "";
    };

    //function to accept new usernames from the form below and use the content in the newUser function (defined in App) for sending to the server from the Parent
    const onSubmitUser = evt => {
      evt.preventDefault();
      const nameInput = evt.target.elements.name;
      this.props.newUsr(nameInput.value);
    };

    /* the component returns two forms:
     - form that accpets new usernames from the user and onSubmit sends the content to the onSubmitUser function above
     - form that accpets new messages from the user and onSubmit sends the content to the onSubmit function above
    */

    return (
        <footer className="chatbar">
          <form id="forms" onSubmit={onSubmitUser}>
          <input className="chatbar-username" name="name" placeholder="Your Name (Optional)" />
          <button id="newmsginput" type="submit">Add</button>
          </form>

          <form id="forms" onSubmit={onSubmit}>
          <input  className="chatbar-message" name="msgName" placeholder="Type a message and hit ENTER" />
          <button id="newmsginput" type="submit">Add</button>
          </form>
        </footer>
          );
        }
      }

export default ChatBar;