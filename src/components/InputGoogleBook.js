/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */

import Helper from '../helpers/helper';

let helper = new Helper();

export const InputGoogleBook = () => {
  const handleBookFetch = () => {
    helper.queryGoogleBooks()
      .then(bookObj => console.log(bookObj.items));
  };

  return (
    <div>google books
      <button onClick={() => handleBookFetch() }>CLICK</button>
    </div>
  );
};
