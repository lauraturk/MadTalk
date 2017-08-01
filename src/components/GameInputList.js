/* eslint-disable */
import React from 'react';
import { GameInput } from './GameInput';
import { Link } from 'react-router-dom';
/* eslint-enable */

export const GameInputList = ({ selectedWordObj, handleGameInputs, speechEnabled }) => {
  if (!Object.keys(selectedWordObj).length) { return <div></div>; }

  let counter = 0;
  const gameInputArr = Object.keys(selectedWordObj).map(wordTypeArr => {
    return selectedWordObj[wordTypeArr].map(wordObj => {
      counter++;
      return <GameInput key={ counter }
        wordInfo={ wordObj }
        inputNumber={ counter }
        handleGameInputs={ handleGameInputs }
        speechEnabled={speechEnabled}/>;
    });
  });

  let gameInputArrObjs = [];
  gameInputArr.forEach(typeArr => gameInputArrObjs.push(...typeArr));

  return (
    <section id='game-input-list-container'>
      <div id='game-input-list'>{ gameInputArrObjs }</div>
      <Link to='/gameoutput' id='submit-inputs-btn'>submit</Link>
    </section>
  );
};
