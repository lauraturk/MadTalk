/* eslint-disable */
import React from 'react';
/* eslint-enable */

export const GameOutput = ({ wordItem }) => {
  if (wordItem.charAt(0) === '#') {
    let htmlWord = wordItem.split('#')[1];
    return <div className='game-output-user-word'>{ htmlWord }</div>;
  } else {
    return <div className='game-output-word'>{ wordItem }</div>;
  }
};
