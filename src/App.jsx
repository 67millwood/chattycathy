import React, {Component} from 'react';
import MessageList from './MessageList.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <MessageList />
        <h1>from app file</h1>
      </div>
    );
  }
}
export default App;
