/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
import { GameOutputList } from './GameOutputList';
import * as icons from '../assets/icons'
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
      stagingInputs: [],
      isLoading: false,
      speechEnabled: false
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
    // this.state.stagingInputs.push(newGameInputWords);
    // console.log(this.state.stagingInputs);
    this.setState({
      gameInputWords: newGameInputWords
    });
  }

  renderComponents () {
    if (this.state.textSample === '' && this.state.selectedWords.length === 0) {
      return (
        <section className="text-source-container">
          <h2>Hit Start Game to begin.</h2>
          <h2>new route: (?) section to select text source</h2>
          <button className="App-startBtn" onClick={() => this.startNewGame()}>start game</button>
        </section>
      );
    } else if (this.state.gameInputWords.length === 0 && this.state.textSample !== '' && this.state.selectedWords.length !== 0) {
      // console.log('trigger text input');
      return (
        <GameInputList selectedWordObj={ this.state.selectedWords }
          handleGameInputs={ this.handleGameInputs.bind(this) } handleAllInputs = { this.handleAllInputs.bind(this)}/>
      );
    } else if (this.state.gameInputWords.length !== 0) {
      return (
        <GameOutputList textSample={ this.state.textSample }
          gameInputWords={ this.state.gameInputWords }/>
      );
    }
  }

  render () {
    return (
      <section className="App">
        <header>
          <h1>MADTALK</h1>
          <button className="App-speechBtn" onClick={() => this.setState({speechEnabled: !this.state.speechEnabled})}>{!this.state.speechEnabled ? icons.micOff : icons.micOn }</button>
        </header>
        {this.renderComponents()}
      </section>
    );
  }
}

export default App;
