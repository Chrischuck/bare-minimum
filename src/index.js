/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'

import './manifest.json'

import Router from './app/utils/router';
import App from './app';

import FinalGradeRoute from './routes/finalGrade/components/index.bundle.js';
import WeightedGradeRoute from './routes/weightedGrade/components/index.bundle.js';
import DamageCalculator from './routes/damageControl/components/index.bundle.js';
import GPARoute from './routes/gpa/components/index.bundle.js';
import NotFoundRoute from './routes/notFound/components/index.bundle.js';

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
