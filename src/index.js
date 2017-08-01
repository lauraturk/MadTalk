/* eslint-disable */
import React from 'react';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
/* eslint-enable */
import ReactDOM from 'react-dom';

// import createHistory from 'history/createBrowserHistory';

import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';

// const history = createHistory();

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
