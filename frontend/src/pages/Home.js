import React, { Component } from 'react';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import NameForm from '../components/NameForm';

class MessageRefresher {
  constructor() {
    this.trigger = () => {};

    this.refreshMessages = this.refreshMessages.bind(this);
    this.registerTrigger = this.registerTrigger.bind(this);
  }

  refreshMessages() {
    this.trigger();
  }

  registerTrigger(callback) {
    this.trigger = callback;
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('name') == null) {
      localStorage.setItem('name', 'anon');
    }
    this.refresher = new MessageRefresher();
    console.log(this.refresher);
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
            <MessageList refresher={this.refresher}/> 
          </div>
          <div className="six columns">
            <MessageForm refresher={this.refresher}/>
            <NameForm/> 
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
