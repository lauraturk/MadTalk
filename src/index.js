/* eslint-disable */
import React from 'react';
import App from './components/App';
/* eslint-enable */

import ReactDOM from 'react-dom';
import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
