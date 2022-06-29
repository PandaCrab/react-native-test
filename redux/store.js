import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';

import stuffReducer from './ducks/stuff';
 
export const store = configureStore({reducer: {
  order: stuffReducer,
}});
