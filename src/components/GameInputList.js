/* eslint-disable */
import React from 'react';
import { GameInput } from './GameInput';
/* eslint-enable */

export const GameInputList = ({ selectedWordObj, handleGameInputs }) => {
  if (!Object.keys(selectedWordObj).length) { return <div></div>; }

  let counter = 0;
  const gameInputArr = Object.keys(selectedWordObj).map(wordTypeArr => {
    return selectedWordObj[wordTypeArr].map(wordObj => {
      counter++;
      return <GameInput key={ counter }
        wordInfo={ wordObj }
        inputNumber={ counter }
        handleGameInputs={ handleGameInputs } />;
    });
  });

  // const randomizeInputs = (inputArr) => {
  //   // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //   let currentIndex = inputArr.length;
  //   let tempValue = null;
  //   let randomIndex = null;
  //
  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     tempValue = inputArr[currentIndex];
  //     inputArr[currentIndex] = inputArr[randomIndex];
  //     inputArr[randomIndex] = tempValue;
  //   };
  //   return inputArr;
  // };

  let gameInputArrObjs = [];
  gameInputArr.forEach(typeArr => gameInputArrObjs.push(...typeArr));
  // const randomizedInputArr = randomizeInputs(gameInputArrObjs);

  return (
    <section id='game-input-container'>{ gameInputArrObjs }</section>
  );
};
