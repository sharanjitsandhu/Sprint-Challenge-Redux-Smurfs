import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import {connect} from 'react-redux';
import { getSmurfs } from '../actions/';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      readyToSmurf: false
    };
  };

  startSmurfing = event => {
    this.setState(prevState => ({
      readyToSmurf: true
      })
    );
    this.props.getSmurfs();
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
      <button onClick={this.startSmurfing}>Get Smurfs</button>
        {this.state.readyToSmurf &&
          <React.Fragment>
          <SmurfForm />
          {this.props.smurfs && <SmurfList smurfs={this.props.smurfs} />}
          </React.Fragment>}
      </div>
    );
  }
}
const mapSmurfsToSmurfs = state => ({
  smurfs: state.list
});
export default connect( mapSmurfsToSmurfs, { getSmurfs } )( App );