/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
import { GameOutputList } from './GameOutputList';
import { InputSnippet } from './InputSnippet';
import { InputGoogleBook } from './InputGoogleBook';

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
    this.setState({isLoading: true});
    helper.getTextSample()
      .then(textSample => {
        const selectedIndices = helper.getPartsOfSpeech(textSample.words);
        this.setState({
          textSample: textSample,
          selectedWords: selectedIndices,
          isLoading: false
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

  displayLoadingGIF () {
    if (this.state.isLoading) {
      return (
        <img id='App-fabioImg' src="https://media.giphy.com/media/g1EJwzB0E1ZAs/giphy.gif" alt='Fabio gif' />
      );
    }
  }

  render () {
    return (
      <section className="App">
        <section className="text-source-container">
          <header>
            <h1>MADTALK</h1>
            <button className="App-speechBtn" onClick={() => this.setState({speechEnabled: !this.state.speechEnabled})}>{!this.state.speechEnabled ? icons.micOff : icons.micOn }</button>
            <Link to = '/gameinput' className="App-startBtn" onClick={() => this.startNewGame()}>new game</Link>
          </header>
        </section>
        <div id='App-fabioGIF'>{ this.displayLoadingGIF() }</div>
        <InputSnippet />
        <InputGoogleBook />
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
