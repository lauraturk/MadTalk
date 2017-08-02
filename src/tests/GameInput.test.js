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
  it('1. Renders the prompt', () => {
    const wrapper = shallow(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    expect(wrapper.find('h4').text()).toEqual('singular noun');
  });

  it('2. Renders with an input', () => {
    const wrapper = shallow(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    expect(wrapper.find('input').length).toEqual(1)
  });

  it('3. Input should update with value from state', () => {
    const wrapper = mount(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    expect(wrapper.state('selected')).toEqual(false)
    wrapper.simulate('focus');
    expect(wrapper.state('selected')).toEqual(true)
  });

  it('4. onblur input should be sent to App', () => {
    const mockFunc = jest.fn()
    const wrapper = mount(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}} onBlur={mockFunc}/>);

    wrapper.simulate('blur');
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
