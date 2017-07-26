/* eslint-disable */
import React from 'react';
/* eslint-enable */

export const GameInput = ({ wordInfo, inputNumber }) => {
  console.log(wordInfo);

  return (
    <div className={`game-input-card card-${inputNumber}`} data-index={ wordInfo.index } data-type={ wordInfo.type }>
      <label>
        <input className='selected-word-input' placeholder={ wordInfo.type }/>
        <h4>{ wordInfo.type }</h4>
      </label>
    </div>
  );
};
