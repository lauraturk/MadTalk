import React from 'react';

const SpeechRecognition = window.SpeechRecognition ||
                    window.webkitSpeechRecognition ||
                    window.mozSpeechRecognition;

export const startSpeechRec = () => {
  const recognition = new SpeechRecognition();

  recognition.start();
  console.log('listening for ', prompt);

  recognition.onspeechend = () => {
    recognition.stop();
    console.log('stopped');
  };

  recognition.onresult = (e) => {
    let last = e.results.length - 1;
    let word = e.results[last][0].transcript;

    console.log('results: ', e.results);
    console.log('result: ', word);
    console.log('Confidence: ' + e.results[0][0].confidence);

    // this.setState({ wordInput: word });
  };
};
