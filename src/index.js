/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';

const routes = {
  path: '/',
  component: App,
  childRoutes: [

  ]
};


ReactDOM.render(
  <Router history={ browserHistory } routes={ routes } />,
  document.getElementById('app')
);
