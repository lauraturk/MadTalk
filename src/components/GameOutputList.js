/* eslint-disable */
import React from 'react';
import { GameOutput } from './GameOutput';
import { SpeechSynth } from './SpeechSynth';
/* eslint-enable */

export const GameOutputList = ({ textSample, gameInputWords, speechEnabled }) => {
  if (!textSample.textSample) { return <div></div>; }
  let indexedTextSample = textSample.textSample[0].body.split(' ');
  let punctuationArr = ["'", ',', '.', '?', '!', '-', '$', '&', '(', ')', 's', 't', 'nt', 'd', 've'];

  gameInputWords.forEach(word => {
    indexedTextSample[word.wordIndex] = `####${word.userInputWord}###`;
  });

  let joinedWords = indexedTextSample.reduce((acc, word) => {
    let currentWord = word.split('/')[0];
    let space = ' ';
    if (punctuationArr.includes(currentWord)) { space = ''; };
    acc += space + currentWord;
    return acc;
  }, '');

  let wordsWithHTML = joinedWords.split('###').map((word, i) => {
    return <GameOutput key={ i }
      wordItem={ word }/>;
  });

  const outputSynthEnd = () => {
    console.log('Put something here to tell user the reading is done');
  };

  // console.log(joinedWords);
  // console.log(indexedTextSample);
  // console.log(wordsWithHTML);

  return (
    <section className='GameOutput-container'>
      <div className='GameOutput-textContainer'>
        {!speechEnabled ? null : <SpeechSynth text={ joinedWords } onSynthEnd={outputSynthEnd.bind(this)} />}
        { populatedOutput }
      </div>
    </section>
  );
};
