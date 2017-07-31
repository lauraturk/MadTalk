/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
import { GameOutputList } from './GameOutputList';

import { Link, Route } from 'react-router-dom';
import * as icons from '../assets/icons';
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
    this.setState({
      gameInputWords: newGameInputWords
    });
  }

  render () {
    return (
      <section className="App">
        <section className="text-source-container">
          <h2>Hit Start Game to begin.</h2>
          <h2>new route: (?) section to select text source</h2>
          <button className="App-speechBtn" onClick={() => this.setState({speechEnabled: !this.state.speechEnabled})}>{!this.state.speechEnabled ? icons.micOff : icons.micOn }</button>
          <Link to = '/gameinput' className="App-startBtn" onClick={() => this.startNewGame()}>start game</Link>
        </section>
        <Route path={'/gameinput'} render={() => <GameInputList selectedWordObj={ this.state.selectedWords }
          handleGameInputs={ this.handleGameInputs.bind(this) }
          speechEnabled={this.state.speechEnabled}/>}/>
        <Route path={'/gameoutput'} render={() => <GameOutputList textSample={ this.state.textSample }
          gameInputWords={ this.state.gameInputWords }
          speechEnabled={this.state.speechEnabled}/>}/>
      </section>
    );
  }
}

export default App;
