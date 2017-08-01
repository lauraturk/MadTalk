/* eslint-disable */
import React from 'react';
import { GameOutput } from './GameOutput';
import { SpeechSynth } from './SpeechSynth';
/* eslint-enable */

export const GameOutputList = ({ textSample, gameInputWords, speechEnabled }) => {
  console.log(gameInputWords);
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

  const outputSynthEnd = () => {
    console.log('Put something here to tell user the reading is done');
  };

  return (
    <section className='GameOutput-container'>
      <video loop muted autoPlay className="video">
        <source src = "../assets/video_bg/gif18.mp4" type="video/mp4"/>
      </video>
      <div className='GameOutput-textContainer'>
        {!speechEnabled ? null : <SpeechSynth text={ joinedWords } onSynthEnd={outputSynthEnd.bind(this)} />}
        { populatedOutput }
      </div>
    </section>
  );
};
