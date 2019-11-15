import React, { Component } from 'react';

import MessageList from '../components/messagelist';
import MessageForm from '../components/messageform';
import NameForm from '../components/nameform';

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
            <h2>Welcome ... to a chatroom! </h2>
            <h5>Your name is <i>{this.state.name}</i>. This channel is <i>{this.state.channel}</i>. You can access the home page from <a href="/">here.</a></h5>
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
