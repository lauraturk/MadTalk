/* global expect jest true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameInputList } from '../components/GameInputList';
import { shallow, mount } from 'enzyme';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
/* eslint-enable */
describe('Game Input List tests', () => {
  const selectedWordObj = {
    selectedAdjs: [{word: 'ball', type: 'NN', index: 1}],
    selectedNouns: [{word: 'ball', type: 'NN', index: 1}],
    selectedVerbs: [{word: 'ball', type: 'NN', index: 1}]
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameInputList selectedWordObj={selectedWordObj}
      speechEnabled= {false}
      gameTitle={{textSample:[{title: 'Ooh'}]}}
    />);
  });

  it('1. makes a list before each game input created', () => {
    expect(wrapper.find('#game-input-list').length).toEqual(1);
  });
});
