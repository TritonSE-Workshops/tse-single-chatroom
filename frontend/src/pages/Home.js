import React, { Component } from 'react';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import NameForm from '../components/NameForm';

class Home extends Component {
  constructor(props) {
    super(props);
    let sender = localStorage.getItem('name');
    if (sender == null) {
      localStorage.setItem('name', 'anon');
    }
  }

  render() {
    return (
      <div className="container separation-large">
        <div className="row separation">
          <div className="twelve columns">
            <h2>Welcome to a simple chatroom!</h2>
            <h5>Your client will poll for messages. You can submit messages and change your name using the appropriate form boxes.</h5>
          </div>
        </div>
        <div className="row separation">
          <div className="six columns">
            <MessageList/> 
          </div>
          <div className="six columns">
            <MessageForm/> 
            <NameForm/> 
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
