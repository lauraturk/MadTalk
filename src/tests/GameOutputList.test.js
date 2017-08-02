/* global expect true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameOutputList } from '../components/GameOutputList';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

import textStub from './textStub.js';
import wordStub from './wordStub.js';

describe('GameOutputList tests', () => {
  const txtSample = {textStub, wordStub};
  const inputWords = [
    {userInputWord: 'Bluer', wordIndex: 5, wordType: 'JJ'},
    {userInputWord: 'Great', wordIndex: 6, wordType: 'NN'}
  ];

  it.skip('1. should render GameOutput-container', () => {
    const wrapper = shallow(<GameOutputList textSample={ txtSample }
      gameInputWords={ inputWords }
      speechEnabled={ false }/>);
    expect(wrapper.find('.GameOutput-container').length).toBe(1);
  });
});
