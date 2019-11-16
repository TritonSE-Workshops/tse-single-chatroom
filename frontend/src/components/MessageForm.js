import React, { Component } from 'react';

import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL || "localhost:5000";

class MessageForm extends Component {
  constructor(props) {
    super(props);

    // Calling this.refresher.refreshMessages() will force 
    // the list of messages to be updated, regardless of the polling
    // interval. Think of it like force refreshing a web page.
    this.refresher = props.refresher;

    // TODO: Initialize this.state, bind functions, etc. 
  }

  render() {
    // TODO: Add a form here to allow users to enter in messages and submit them.
    // What other component uses a form? Maybe repurpose code from that component?
    return (<div>
        <h4>Add a Message</h4>
      </div>
    );
  }
}

export default MessageForm;
