import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact render={(props) => <Home {...props}/>}/>
      </div>
    ); 
  }
}

export default App;
