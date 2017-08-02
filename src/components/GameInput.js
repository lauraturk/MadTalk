/* eslint-disable */
import React, { Component } from 'react';
import { SpeechSynth } from './SpeechSynth';
import { SpeechRec } from './SpeechRec';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';

export class GameInput extends Component {
  constructor () {
    super();
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

  componentWillUnmount () {
    console.log('unmount');
  }

  onInputFocus () {
    console.log('on input focus');
    if (this.props.speechEnabled) {
      this.setState({
        selected: true,
        play: true
      });
    } else {
      this.setState({
        selected: true
      });
    };
  }

  onDivBlur () {
    this.props.handleGameInputs(this.state);
    this.setState({
      selected: false,
      play: false,
      listen: false
    });
  }

  selectedCheck () {
    if (this.state.selected) {
      return 'game-input-container-selected';
    } else {
      return null;
    }
  }

  onSynthEnd () {
    this.setState({
      play: false,
      listen: true
    });
  }

  onSpeechEnd () {
    this.setState({
      listen: false
    });
  }

  printValue (word) {
    this.setState({
      wordInput: word
    });
  }

  listeningStyle () {
    if (this.state.listen && this.state.wordInput === '') {
      return {'boxShadow': '0 0 30px #fff'};
    }
  }

  // inputStyle () {
  //   if (this.state.listen && this.state.wordInput === '') {
  //     return 'selected-word-input selected-word-input_listening';
  //   }
  //   return 'selected-word-input';
  // }

  render () {
    const { wordInfo, inputNumber } = this.props;
    let wordPrompt = POShelper[wordInfo.type];

    let selectedCheckValue = this.selectedCheck();
    return (
      <div className={`game-input-card card-${inputNumber} ${selectedCheckValue}`}
        // onFocus = {() => this.onDivFocus()}
        // onBlur = {() => this.onDivBlur()}
        onClick={() => this.refs.child.focus() }
        style={this.listeningStyle()}
        data-index={ wordInfo.index }
        data-type={ wordInfo.type }>
        <label>
          <input className='selected-word-input'
            placeholder={ wordPrompt }
            value={ this.state.wordInput }
            onChange={(e) => this.setState({ wordInput: e.target.value })}
            onBlur={() => this.onDivBlur()}
            onFocus={() => this.onInputFocus()}
            ref='child'
          />
          <h4 className={!this.state.selected ? 'word-prompt' : 'word-prompt-selected'}>{ wordPrompt }</h4>
          <SpeechSynth text={wordPrompt}
            onSynthEnd={this.onSynthEnd.bind(this)}
            playStatus={ this.state.play }/>
          <SpeechRec printValue={this.printValue.bind(this)}
            onSpeechEnd={this.onSpeechEnd.bind(this)}
            listenStatus={ this.state.listen }/>
        </label>
      </div>
    );
  }
};
