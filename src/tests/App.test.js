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

describe('App tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App gameTitle={{textSample: [{title: 'Ooh'}]}}
      speechEnabled= {false}
    />);
  });

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched);
    }
    fetchMock.restore();
  });

  it('1. Renders without crashing', () => {
    expect(wrapper.find('.App').length).toBe(1);
  });

  it('2. Should render a heading', () => {
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('MADTALK');
  });

  it('3. Should toggle sound on button click', () => {
    let button = wrapper.find('.App-speechBtn');

    expect(wrapper.state().speechEnabled).toBe(false);
    button.simulate('click');
    expect(wrapper.state().speechEnabled).toBe(true);
  });

  it('4. Should set state to loading', () => {
    let link = wrapper.find('.App-startBtn');

    link.simulate('click');
    expect(wrapper.state().isLoading).toEqual(true);
  });

  it('5. Should render input option cards on click of the startgame link', async () => {
    mockFetchCalls();
    let link = wrapper.find('.App-startBtn');

    link.simulate('click');

    await resolveAfter2Seconds();
    setTimeout(() => {
      expect(wrapper.state('textSample')).toEqual(textStub);
    }, 5000);
  });
});
