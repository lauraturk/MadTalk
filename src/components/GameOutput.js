/* eslint-disable */
import React from 'react';
/* eslint-enable */

export const GameOutput = ({ textSample, gameInputWords }) => {
  let indexedTextSample = textSample.split(' ');
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

  let wordsWithHTML = joinedWords.split('###').map(word => {
    //  if () word.split('#')[1];
    return word;
  });

  console.log(joinedWords);
  console.log(indexedTextSample);
  console.log(wordsWithHTML);

  return (
    <section className='game-output-container'>
      {/* <div>{ wordsWithHTML }</div> */}
    </section>
  );
};
