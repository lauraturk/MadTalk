/* eslint-disable */
import React from 'react';
import * as icons from '../assets/icons';
/* eslint-enable */

const SpeechRecognition = window.SpeechRecognition ||
                    window.webkitSpeechRecognition ||
                    window.mozSpeechRecognition;

export const SpeechRec = (props) => {
  const { printValue, onSpeechEnd, listenStatus } = props;

  if (listenStatus) {
    const recognition = new SpeechRecognition();
    let listeningClass = 'selected-word-input selected-word-input_listening';

    recognition.start();
    
    recognition.onspeechend = () => {
      listeningClass = 'selected-word-input';
      recognition.stop();
      onSpeechEnd();
    };

    recognition.onresult = (e) => {
      let last = e.results.length - 1;
      let lastword = e.results[last][0].transcript;

      printValue(lastword);
    };

    return (
      <div className='speech-rec-div'>
        <hr className={ listeningClass }></hr>
        <div>{icons.micOn} Listening</div>
      </div>
    );
  } else {
    return (<div></div>);
  }
};
