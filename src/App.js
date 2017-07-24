import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helper from './helper.js';

let helper = new Helper()

class App extends Component {
  constructor () {
    super()
    // this.helper = new Helper()
    this.state = {
      gameTemplate: []
    }
  }

  componentDidMount () {
    helper.distributeSelections();
    helper.getPrintSample()
    .then(jsxArr => {
      console.log(jsxArr);
      this.setState({
        gameTemplate: jsxArr
      })
    });
  }

  // printTest () {
  //   let jsonText = await fetch('https://byob-madlib.herokuapp.com/api/v1/text_samples/1');
  //   let textSample = await jsonText.json();
  //   return textSample;
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p key='123'>{ this.state.gameTemplate }</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
