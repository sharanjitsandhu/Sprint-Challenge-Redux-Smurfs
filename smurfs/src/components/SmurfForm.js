import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import "./App.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    // console.log(newSmurf);
    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Name: {""}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Age: {""}
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Height: {""}
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default connect(
  null,
  { addSmurf }
)(SmurfForm);
