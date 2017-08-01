/* global expect true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameOutput } from '../components/GameOutput';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

describe('GameOutput tests', () => {
  it('1. has an instance of GameOutput-wordContainer', () => {
    const wrapper = shallow(<GameOutput outputWordSection={ 'word' }/>);
    expect(wrapper.find('.GameOutput-text').length).toBe(1);
  });

  it('2. has an instance of GameOutput-text', () => {
    const wrapper = shallow(<GameOutput outputWordSection={ '#word%NN' }/>);
    expect(wrapper.find('.GameOutput-wordContainer').length).toBe(1);
  });
});
