/* global expect true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('App tests', () => {
  it('1. Renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });
});
