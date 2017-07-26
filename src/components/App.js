/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
/* eslint-enable */

import Helper from '../helpers/helper';

let helper = new Helper();

class App extends Component {
  constructor () {
    super();
    this.state = {
      textSample: {},
      words: [],
      selectedWords: [],
      gameInputWords: []
    };
  }

  startNewGame () {
    helper.getTextSample()
      .then(response => {
        const selectedIndices = helper.getPartsOfSpeech(response.words);
        this.setState({
          textSample: response.textSample[0],
          words: response.words,
          selectedWords: selectedIndices
        });
      });
  }

  handleGameInputs (wordInputs) {
    const currentGameInputWords = this.state.gameInputWords;

    const newGameInputWords = currentGameInputWords.filter((gameInputWord) => {
      return gameInputWord.wordIndex !== wordInputs.wordIndex;
    });

    if (wordInputs.wordInput !== '') {
      newGameInputWords.push({userInputWord: wordInputs.wordInput, wordIndex: wordInputs.wordIndex});
    }
    this.setState({
      gameInputWords: newGameInputWords
    });
  }

  render () {
    return (
      <section className="App">
        <section className="text-source-container">
          <h2>new route: (?) section to select text source</h2>
          <button className="App-startBtn" onClick={() => this.startNewGame()}>start game</button>
        </section>
        <GameInputList selectedWordObj={ this.state.selectedWords }
          handleGameInputs={ this.handleGameInputs.bind(this) }/>
        <section className='game-output-container'>
          <h2>new route: display game output</h2>
        </section>
      </section>
    );
  }
}

export default App;
