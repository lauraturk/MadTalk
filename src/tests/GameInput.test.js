import React from 'react';
import ReactDOM from 'react-dom';
import GameInput from '../components/GameInput';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import { resolveAfter2Seconds, mockFetchCalls } from './testHelper'

import wordStub from './wordStub.js'
import textStub from './textStub.js'

import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
