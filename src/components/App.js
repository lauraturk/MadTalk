/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
/* eslint-enable */

import Helper from '../helper';

let helper = new Helper();

class App extends Component {
  constructor () {
    super();
    this.state = {
      textSample: {},
      words: [],
      selectedWords: []
    };
  }

  componentDidMount () {
    helper.getTextSample()
      .then(response => {
        const selectedIndices = helper.getPartsOfSpeech(response.words);
        console.log(selectedIndices);
        this.setState({
          textSample: response.textSample[0],
          words: response.words,
          selectedWords: selectedIndices
        });
      });
  }

  render () {
    return (
      <section className="App">
        <section className="text-source-container">
          <h2>new route: (?) section to select text source</h2>
        </section>
        <GameInputList selectedWordObj={ this.state.selectedWords }/>
        <section className='game-output-container'>
          <h2>new route: display game output</h2>
        </section>
      </section>
    );
  }
}

export default App;
