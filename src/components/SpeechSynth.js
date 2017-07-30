/* eslint-disable */
import React, { Component } from 'react';
import * as icons from '../assets/icons';
/* eslint-enable */

export class SpeechSynth extends Component {
  constructor (props) {
    super();
    this.state = {
      start: false,
      playing: false
    };
    this.speech = this.createUtterance(props.text);
  }

  createUtterance (utterance) {
    const defaults = {
      volume: 1,
      rate: 1,
      pitch: 1,
      lang: 'en-US'
    };

    let speech = new SpeechSynthesisUtterance(utterance);

    Object.assign(speech, defaults);

    return speech;
  }

  speak () {
    window.speechSynthesis.speak(this.speech);
  }

  endSpeak () {
    const { onSynthEnd } = this.props;
    onSynthEnd();
  }

  componentDidMount () {
    this.speak();
    this.speech.addEventListener('end', () => {
      return this.endSpeak();
    });
  }

  render () {
    return (
      <div>{icons.speakerOn}</div>
    );
  }
};
