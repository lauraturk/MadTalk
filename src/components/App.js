/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
import { GameOutputList } from './GameOutputList';
/* eslint-enable */

import Helper from '../helpers/helper';

let helper = new Helper();

class App extends Component {
  constructor () {
    super();
    this.state = {
      textSample: '',
      selectedWords: [],
      gameInputWords: [],
      isLoading: false
    };
  }

  startNewGame () {
    helper.getTextSample()
      .then(textSample => {
        const selectedIndices = helper.getPartsOfSpeech(textSample.words);
        this.setState({
          textSample: textSample,
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
      newGameInputWords.push({
        userInputWord: wordInputs.wordInput,
        wordIndex: wordInputs.wordIndex,
        wordType: wordInputs.wordType
      });
    }
    this.setState({
      gameInputWords: newGameInputWords
    });
  }

  renderComponents () {
    console.log(this.state.gameInputWords);
    if (this.state.textSample === '' && this.state.selectedWords.length === 0) {
      console.log('trigger button start');
      return (
        <section className="text-source-container">
          <h2>Hit Start Game to begin.</h2>
          <button className="App-startBtn" onClick={() => this.startNewGame()}>start game</button>
        </section>
      );
    } else if (this.state.gameInputWords.length === 0 && this.state.textSample !== '' && this.state.selectedWords.length !== 0) {
      console.log('trigger text input');
      return (
        <GameInputList selectedWordObj={ this.state.selectedWords }
          handleGameInputs={ this.handleGameInputs.bind(this) }/>
      );
    } else {
      console.log('display output');
      return (
        <GameOutputList textSample={ this.state.textSample }
          gameInputWords={ this.state.gameInputWords }/>
      );
    }
  }

  render () {
    return (
      <section className="App">
        <header> MADTALK</header>
        {this.renderComponents()}
      </section>
    );
  }
}

export default App;
