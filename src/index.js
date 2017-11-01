/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'

import './manifest.json'

import Router from './app/router';
import App from './app';

import FinalGradeRoute from './routes/finalGrade/components';
import WeightedGradeRoute from './routes/weightedGrade/components';
import DamageCalculator from './routes/damageControl/components';
import GPARoute from './routes/gpa/components';
import NotFoundRoute from './routes/notFound/components';


(function() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/bareminimumSW.js');
  }
})();

const history = createHistory()

const routes = {
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/grade-calculator') },
  childRoutes: {
    FinalGradeRoute,
    WeightedGradeRoute,
    DamageCalculator,
    GPARoute,
    NotFoundRoute,
  },
};

ReactDOM.render(
    <Router history={history} routes={routes}/>,
  document.getElementById('app')
);
