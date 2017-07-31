/* eslint-disable */
import React from 'react';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';

export const GameOutput = ({ outputWordSection }) => {
  if (outputWordSection.charAt(0) === '#') {
    const wordAndWordType = outputWordSection.split('#')[1];
    const outputWord = wordAndWordType.split('%')[0];
    const outputWordType = wordAndWordType.split('%')[1];
    const wordPrompt = POShelper[outputWordType];

    return <div className='game-output-user-word'>
      <div>{ outputWord }</div>
      <h5 className='game-output-word-type'>{ wordPrompt }</h5>
    </div>;
  } else {
    return <div className='game-output-word'>{ outputWordSection }</div>;
  }
};
