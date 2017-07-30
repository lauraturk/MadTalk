/* eslint-disable */
import React, { Component } from 'react';
import * as icons from '../assets/icons';
/* eslint-enable */

export const SpeechSynth = (props) => {
  const { text } = props;

  const createUtterance = (utterance) => {
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

    return speech;
  };

  const speak = (speech) => {
    window.speechSynthesis.speak(speech);
  };

  const endSpeak = () => {
    const { onSynthEnd } = props;
    onSynthEnd();
  };

  speak(createUtterance(text));

  return (<div>{icons.speakerOn}</div>);
};
