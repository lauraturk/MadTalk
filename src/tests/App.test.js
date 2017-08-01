/* global expect jest true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { resolveAfter2Seconds, mockFetchCalls } from './testHelper'

import wordStub from './wordStub.js'
import textStub from './textStub.js'

import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'

/* eslint-enable */

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('App tests', () => {
  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched);
    }
    fetchMock.restore();
  });

  it('1. Renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('2. Should render a heading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('MADTALK');
  });

  it('3. Should toggle sound on button click', () => {
    const wrapper = shallow(<App />);
    let button = wrapper.find('.App-speechBtn');

    expect(wrapper.state().speechEnabled).toBe(false);
    button.simulate('click');
    expect(wrapper.state().speechEnabled).toBe(true);
  });

  it('4. Should set state to loading', () => {
    const wrapper = shallow(<App />);
    let link = wrapper.find('.App-startBtn');

    link.simulate('click');
    expect(wrapper.state().isLoading).toEqual(true);
  });

  it('5. Should render input option cards on click of the startgame link', async () => {
    mockFetchCalls();
    const wrapper = shallow(<App />);
    let link = wrapper.find('.App-startBtn');

    link.simulate('click');

    await resolveAfter2Seconds();
    setTimeout(() => {
      expect(wrapper.state('textSample')).toEqual(textStub);
    }, 5000);
  });
});
