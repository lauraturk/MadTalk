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
    // let first = e.results[0]
    let lastword = e.results[last][0].transcript;
    // let firstword = e.results[first][0].transcript;

    printValue(lastword, e.results[0][0].confidence);

    console.log('results: ', e.results);
    console.log('result: ', lastword);
    // console.log('result: ', firstword);
    console.log('Confidence: ' + e.results[0][0].confidence);
  };

  return (
    <div>{icons.micOn} Listening</div>
  );
};
