/* eslint-disable */
import { combineReducers } from 'redux';

import GlobalReducer from './app/reducer'

export default function createReducer(asyncReducers) {
  return combineReducers({
    GlobalReducer,
    ...asyncReducers,
  });
}
