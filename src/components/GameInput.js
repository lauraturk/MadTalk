/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';
// import { speakMe } from './SpeechSynthesis';
import { startSpeechRec } from './SpeechRecognition';

// const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// const speechRecognitionList = new SpeechGrammarList();

export class GameInput extends Component {
  constructor () {
    /*eslint-disable */
    super ();
    /*eslint-enable */
    this.state = {
      wordInput: '',
      wordIndex: '',
      wordType: ''
    };
  }

  componentDidMount () {
    const { wordInfo } = this.props;
    this.setState({
      wordIndex: wordInfo.index,
      wordType: wordInfo.type
    });
  }

  sendUpGameInputs () {
    const { handleGameInputs } = this.props;
    handleGameInputs(this.state);
  }

  startSpeechGame (wordPrompt) {
    console.log(wordPrompt, 'start talking!');
    // speakMe(wordPrompt)
    startSpeechRec();
  }

  render () {
    const { wordInfo, inputNumber, speechEnabled } = this.props;
    let wordPrompt = POShelper[wordInfo.type];
    console.log(speechEnabled);

    return (
      <div className={`game-input-card card-${inputNumber}`}
        data-index={ wordInfo.index }
        data-type={ wordInfo.type }>
        <label>
          <input className='selected-word-input'
            placeholder={ wordPrompt }
            value={ this.state.wordInput }
            onChange={(e) => this.setState({ wordInput: e.target.value })}
            onFocus={!speechEnabled ? null : () => this.startSpeechGame(wordPrompt)}
            onBlur={() => this.sendUpGameInputs()}/>
          <h4>{ wordPrompt } ({ wordInfo.word })</h4>
        </label>
      </div>
    );
  }
};
