/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store, routes } from './data';

ReactDOM.render(
  <Provider store={ store } >
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('app')
);
