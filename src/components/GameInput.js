/* eslint-disable */
import React from 'react';
/* eslint-enable */

export const GameInput = ({ wordInfo, inputNumber }) => {
  // POS object helper here? update 'wordInfo.type' with common type word.
  return (
    <div className={`game-input-card card-${inputNumber}`} data-index={ wordInfo.index } data-type={ wordInfo.type }>
      <label>
        <input className='selected-word-input' placeholder={ wordInfo.type }/>
        <h4>{ wordInfo.type } ({ wordInfo.word })</h4>
      </label>
    </div>
  );
};
