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
    indexedTextSample[word.wordIndex] = `####${word.userInputWord}%${word.wordType}###`;
  });

  let joinedWords = indexedTextSample.reduce((acc, word) => {
    let currentWord = word.split('/')[0];
    let space = ' ';
    if (punctuationArr.includes(currentWord)) { space = ''; };
    acc += space + currentWord;
    return acc;
  }, '');

  let populatedOutput = joinedWords.split('###').map((word, i) => {
    return <GameOutput key={ i }
      outputWordSection={ word }/>;
  });

  let gameReadout = populatedOutput.reduce((acc, text) => {
    let phrase = text.props.outputWordSection;
    phrase.charAt(0) === '#'
      ? acc += phrase.split('#')[1].split('%')[0]
      : acc += phrase;
    return acc;
  }, '');

  return (
    <section className='GameOutput-container'>
      <div className='GameOutput-textContainer'>
        {!speechEnabled ? null : <SpeechSynth text={ gameReadout } onSynthEnd={() => null} />}
        { populatedOutput }
      </div>
    </section>
  );
};
