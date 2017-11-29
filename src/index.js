/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Router from './app/utils/router';
import App from './app';

import FinalGradeRoute from './routes/finalGrade/index.bundle.js';
import WeightedGradeRoute from './routes/weightedGrade/index.bundle.js';
import DamageCalculator from './routes/damageControl/index.bundle.js';
import GPARoute from './routes/gpa/index.bundle.js';
import NotFoundRoute from './routes/notFound/index.bundle.js';

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

OfflinePluginRuntime.install();