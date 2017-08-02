/* global expect jest true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameInput } from '../components/GameInput';
import { shallow, mount } from 'enzyme';
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

  it('3. Input should indicate when focused', () => {
    const wrapper = shallow(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    expect(wrapper.state('selected')).toEqual(false)
    wrapper.simulate('focus');
    expect(wrapper.state('selected')).toEqual(true)
  });

  it('4. should indicate when unselected', () => {
    const wrapper = shallow(<GameInput wordInfo={{word: 'ball', type: 'NN', index: 1}}/>);

    wrapper.simulate('focus');
    expect(wrapper.state('selected')).toEqual(true);
    wrapper.simulate('blur');
    expect(wrapper.state('selected')).toEqual(false);
  });
});
