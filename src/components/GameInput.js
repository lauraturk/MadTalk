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
      listen: false,
      selected: false
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

  onInputFocus () {
    if (!this.state.play) {
      this.setState({
        play: true
      });
    }
  }

  onDivFocus () {
    if (!this.state.selected) {
      this.setState({
        selected: true
      });
    }
  }

  onDivBlur () {
    if (this.state.selected) {
      this.setState({
        selected: false
      });
    }
  }

  selectedCheck () {
    if (this.state.selected === true) {
      return 'game-input-container-selected';
    } else {
      return null;
    }
  }

  onSynthEnd () {
    this.setState({
      play: !this.state.play,
      listen: !this.state.listen
    });
  }

  onSpeechEnd () {
    this.setState({
      listen: !this.state.listen
    });
  }

  printValue (word, confidence) {
    this.setState({
      wordInput: word
    });
  }

  listeningStyle () {
    if (this.state.listen && this.state.wordInput === '') {
      return {'boxShadow': '0 0 30px #fff'};
    }
  }

  inputStyle () {
    if (this.state.listen && this.state.wordInput === '') {
      return 'selected-word-input selected-word-input_listening';
    }
    return 'selected-word-input';
  }

  render () {
    const { wordInfo, inputNumber, speechEnabled } = this.props;
    let wordPrompt = POShelper[wordInfo.type];

    let selectedCheckValue = this.selectedCheck();
    return (
      <div className={`game-input-card card-${inputNumber} ${selectedCheckValue}`}
        onFocus = {() => this.onDivFocus()}
        onBlur = {() => this.onDivBlur()}
        style={this.listeningStyle()}
        data-index={ wordInfo.index }
        data-type={ wordInfo.type }
        onClick={!speechEnabled ? null : () => this.onInputFocus()}>
        <label>
          <input className='selected-word-input'
            placeholder={ wordPrompt }
            value={ this.state.wordInput }
            onChange={(e) => this.setState({ wordInput: e.target.value })}
            onBlur={() => this.sendUpGameInputs()}
            onFocus={!speechEnabled ? null : () => this.onInputFocus()} />
          <hr className={this.inputStyle()}></hr>
          <h4 className={!this.state.selected ? 'word-prompt' : 'word-prompt-selected'}>{ wordPrompt }</h4>
          {!this.state.play ? null : <SpeechSynth text={wordPrompt}
            onSynthEnd={this.onSynthEnd.bind(this)} /> }
          {!this.state.listen ? null : <SpeechRec printValue={this.printValue.bind(this)}
            onSpeechEnd={this.onSpeechEnd.bind(this)}/>}
        </label>
      </div>
    );
  }
};
