/* eslint-disable */
import React from 'react';
import * as icons from '../assets/icons';
/* eslint-enable */

const SpeechRecognition = window.SpeechRecognition ||
                    window.webkitSpeechRecognition ||
                    window.mozSpeechRecognition;

export const SpeechRec = (props) => {
  const { printValue, onSpeechEnd } = props;
  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.onspeechend = () => {
    recognition.stop();
    onSpeechEnd();
  };

  recognition.onresult = (e) => {
    let last = e.results.length - 1;
    let lastword = e.results[last][0].transcript;

    printValue(lastword);
  };

  return (
    <div>{icons.micOn} Listening</div>
  );
};
