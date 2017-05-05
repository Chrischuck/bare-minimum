/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory';
import './manifest.json'
import App from './app';

import FinalGradeRoute from './routes/finalGrade';
import WeightedGradeRoute from './routes/weightedGrade';
import DamageCalculator from './routes/damageControl';
import GPARoute from './routes/gpa';
import DonateRoute from './routes/donation';
import NotFoundRoute from './routes/notFound';

(function() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/bareminimumSW.js');
  }
})();

const routes = {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/grade-calculator') },
  childRoutes: [
    FinalGradeRoute,
    WeightedGradeRoute,
    DamageCalculator,
    DonateRoute,
    GPARoute,
    NotFoundRoute,
  ],
};

ReactDOM.render(
    <Router history={ browserHistory } routes={ routes } />,
  document.getElementById('app')
);
