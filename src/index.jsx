// Copyright 2020 Fazt Community ~ All rights reserved. MIT license.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@assets/scss/main.scss'
import './assets/scss/fonts.scss'
import './assets/scss/variables.scss'
import './assets/scss/icons.scss'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
