/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import Router from './app/utils/router';
import App from './app';

import FinalGradeRoute from './routes/finalGrade';
import WeightedGradeRoute from './routes/weightedGrade';
import DamageCalculator from './routes/damageControl';
import GPARoute from './routes/gpa';
import NotFoundRoute from './routes/notFound';

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