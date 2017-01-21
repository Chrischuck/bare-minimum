/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';
import './manifest.json'
import App from './app';

import FinalGradeRoute from './routes/finalGrade';
import GPARoute from './routes/gpa';
import AboutRoute from './routes/about';
import NotFoundRoute from './routes/notFound';

require('offline-plugin/runtime').install();

const routes = {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/grade-calculator') },
  childRoutes: [
    FinalGradeRoute,
    AboutRoute,
    GPARoute,
    NotFoundRoute,
  ],
};

ReactDOM.render(
    <Router history={ browserHistory } routes={ routes } />,
  document.getElementById('app')
);
