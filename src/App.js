/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import logo from './logo.svg';
import './App.css';
import Helper from './helper.js';

let helper = new Helper();

class App extends Component {
  // constructor () {
  //   super()
  //   // this.helper = new Helper()
  // }

  componentDidMount () {
    helper.getPartsOfSpeech()
      .then(response => console.log(response));
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
