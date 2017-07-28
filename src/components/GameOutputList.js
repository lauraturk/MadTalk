/* eslint-disable */
import React from 'react';
import { GameOutput } from './GameOutput';
/* eslint-enable */

export const GameOutputList = ({ textSample, gameInputWords }) => {
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

  console.log(joinedWords);
  console.log(indexedTextSample);
  console.log(wordsWithHTML);

  return (
    <section className='game-output-container'>{ wordsWithHTML }</section>
  );
};
