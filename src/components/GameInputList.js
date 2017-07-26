/* eslint-disable */
import React from 'react';
import { GameInput } from './GameInput';
/* eslint-enable */

export const GameInputList = ({selectedWordObj}) => {
  if (!Object.keys(selectedWordObj).length) { return <div></div>; }

  console.log(selectedWordObj.selectedAdjs);
  let counter = 0;
  const gameInputArr = Object.keys(selectedWordObj).map(wordTypeArr => {
    return selectedWordObj[wordTypeArr].map(wordObj => {
      counter++;
      return <GameInput key={ counter }
        wordInfo={ wordObj }
        inputNumber={ counter }/>;
    });
  });

  return (
    <section id='game-input-container'>{ gameInputArr }</section>
  );
};
