/* eslint-disable */
import React, { Component } from 'react';
import { SpeechSynth } from './SpeechSynth';
import { SpeechRec } from './SpeechRec';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';

export class GameInput extends Component {
  constructor () {
    /*eslint-disable */
    super ();
    /*eslint-enable */
    this.state = {
      wordInput: '',
      wordIndex: '',
      wordType: '',
      play: false,
      listen: false
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

  onSynthEnd () {
    console.log('on synth end, are we here?');
    this.setState({
      play: !this.state.play,
      listen: !this.state.listen
    });
  }

  onSpeechEnd () {
    console.log('on speech end');
    this.setState({
      listen: !this.state.listen
    });
  }

  printValue (word, confidence) {
    console.log(confidence, 'confidence in print value');
    this.setState({
      wordInput: word
    });
  }

  render () {
    const { wordInfo, inputNumber, speechEnabled } = this.props;
    let wordPrompt = POShelper[wordInfo.type];

    return (
      <div className={`game-input-card card-${inputNumber}`}
        data-index={ wordInfo.index }
        data-type={ wordInfo.type }>
        {!this.state.play ? null : <SpeechSynth text={wordPrompt} onSynthEnd={this.onSynthEnd.bind(this)} /> }
        {!this.state.listen ? null : <SpeechRec printValue={this.printValue.bind(this)} onSpeechEnd={this.onSpeechEnd.bind(this)}/>}
        <label>
          <h4>{ wordPrompt }</h4>
          <input className={this.inputStyle()}
            placeholder={ wordPrompt }
            value={ this.state.wordInput }
            onChange={(e) => this.setState({ wordInput: e.target.value })}
            onBlur={() => this.sendUpGameInputs()}
            onFocus={!speechEnabled ? null : () => this.onInputFocus()} />
          {!this.state.play ? null : <SpeechSynth text={wordPrompt}
            onSynthEnd={this.onSynthEnd.bind(this)} /> }
          {!this.state.listen ? null : <SpeechRec printValue={this.printValue.bind(this)}
            onSpeechEnd={this.onSpeechEnd.bind(this)}/>}
        </label>
      </div>
    );
  }
};
