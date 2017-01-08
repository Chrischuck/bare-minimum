/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'

import configureStore from './store'

import App from './app';

import FinalGradeRoute from './routes/finalGrade'
import GPARoute from './routes/gpa'
import HomeRoute from './routes/home'
import NotFoundRoute from './routes/notFound'

export const store = configureStore()

const routes = {
  path: '/',
  component: App,
  IndexRoute: HomeRoute,
  childRoutes: [
    FinalGradeRoute(store),
    GPARoute,
    NotFoundRoute
  ]
};

ReactDOM.render(
  <Provider store={ store } >
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('app')
);
