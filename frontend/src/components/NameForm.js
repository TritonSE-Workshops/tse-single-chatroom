import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: localStorage.getItem('name'),
      form_name: '' 
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ form_name : event.target.value });
  }

  handleNameSubmit(event) {
    event.preventDefault();

    let name = this.state.form_name;
    if (name == null || name === '') {
      return;
    }

    document.getElementById('name-form').reset();
    localStorage.setItem('name', name);
    this.setState({name: name, form_name: ''});
  }

  render() {
    return (<div>
        <h4>Change Your Name</h4>
        <p>Your name is currently <b>{this.state.name}</b>.</p>
        <form onSubmit={this.handleNameSubmit} id="name-form">
          <label>Name: </label>
          <input type="text" className="u-full-width" onChange={this.handleNameChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default NameForm;
