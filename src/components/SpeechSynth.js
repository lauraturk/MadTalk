/* eslint-disable */
import React, { Component } from 'react';
import * as icons from '../assets/icons';
/* eslint-enable */

export const SpeechSynth = (props) => {
  const { text, playStatus } = props;
  let icon = icons.speakerOn;

  const createUtterance = (utterance) => {
    window.speechSynthesis.cancel();
    speechSynthesis.cancel();
    const defaults = {
      volume: 1,
      rate: 1,
      pitch: 1,
      lang: 'en-US'
    };

    let speech = new SpeechSynthesisUtterance(utterance);

    speech.addEventListener('end', () => {
      return endSpeak();
    });

    Object.assign(speech, defaults);

    window.speechSynthesis.speak(speech);
  };

  const endSpeak = () => {
    const { onSynthEnd, playStatus } = props;
    if (playStatus) {
      console.log('is listen turned on here?');
      onSynthEnd();
    }
  };

  const turnOffSpeech = () => {
    window.speechSynthesis.cancel();
  };

  if (playStatus) {
    createUtterance(text);
    return (<div onClick={() => turnOffSpeech()}>{icon}</div>);
  }

  return (<div></div>);
};
