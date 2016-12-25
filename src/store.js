/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import createReducer from './reducers';
import createLogger from 'redux-logger';

const logger = createLogger()

export default function configureStore(initialState) {
  let store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  applyMiddleware( logger )
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
