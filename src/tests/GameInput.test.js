/* global expect jest true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameInput } from '../components/GameInput';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { resolveAfter2Seconds, mockFetchCalls } from './testHelper'
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import wordStub from './wordStub.js'
import textStub from './textStub.js'
/* eslint-enable */

describe('Game Input tests', () => {
  it('1. Renders without crashing', () => {
    const wrapper = shallow(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    expect(wrapper.find('h4').text()).toEqual('singular noun');
  });
});
