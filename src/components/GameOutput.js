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

    return <span className='GameOutput-wordContainer'>
      <h4 className='GameOutput-word'>{ outputWord.toUpperCase() }</h4>
      <h5 className='GameOutput-type'>{ wordPrompt }</h5>
    </span>;
  } else {
    return <h4 className='GameOutput-text'>{ outputWordSection }</h4>;
  }
};
