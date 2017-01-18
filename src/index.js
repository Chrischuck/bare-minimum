/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';
import './manifest.json'
import App from './app';

import FinalGradeRoute from './routes/finalGrade';
import GPARoute from './routes/gpa';
import HomeRoute from './routes/home';
import NotFoundRoute from './routes/notFound';

const routes = {
  path: '/',
  component: App,
  IndexRoute: HomeRoute,
  childRoutes: [
    FinalGradeRoute,
    GPARoute,
    NotFoundRoute,
  ],
};

ReactDOM.render(
    <Router history={ browserHistory } routes={ routes } />,
  document.getElementById('app')
);
