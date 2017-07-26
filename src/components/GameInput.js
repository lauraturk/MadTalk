/* eslint-disable */
import React from 'react';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';

export const GameInput = ({ wordInfo, inputNumber }) => {
  const wordDescription = POShelper[wordInfo.type];
  return (
    <div className={`game-input-card card-${inputNumber}`} data-index={ wordInfo.index } data-type={ wordInfo.type }>
      <label>
        <input className='selected-word-input' placeholder={ wordDescription }/>
        <h4>{ wordDescription } ({ wordInfo.word })</h4>
      </label>
    </div>
  );
};
