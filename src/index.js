/* eslint-disable */
import React from 'react';
import App from './components/App';
/* eslint-enable */
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
