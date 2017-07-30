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
  // console.log('listening for ', prompt);

  recognition.onspeechend = () => {
    recognition.stop();
    // console.log('stopped');
    onSpeechEnd();
  };

  recognition.onresult = (e) => {
    let last = e.results.length - 1;
    let word = e.results[last][0].transcript;

    printValue(word, e.results[0][0].confidence);

    // console.log('results: ', e.results);
    // console.log('result: ', word);
    // console.log('Confidence: ' + e.results[0][0].confidence);
  };
  return (
    <div>{icons.micOn}</div>
  );
};
