import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';
import './App.css'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleFormText = (event) => {
    event.persist();
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    })
  )};

  handleSubmit = (event) => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    console.log(newSmurf);
    this.props.createSmurf(newSmurf);

    setTimeout(console.log(this.state),1000);
  };

  render() { return (
    <form onSubmit={(event) => this.handleSubmit(event)}>
      <p><label>Name: <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleFormText(event)} /></label></p>
      <p><label>Age: <input type="text" name="age" value={this.state.age} onChange={(event) => this.handleFormText(event)} /></label></p>
      <p><label>Height: <input type="text" name="height" value={this.state.height} onChange={(event) => this.handleFormText(event)} /></label></p>
      <button type="submit">Add Smurf</button>
    </form>
  )};
};


export default connect(null,{ createSmurf })(SmurfForm);