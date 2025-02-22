import {combineReducers} from '@reduxjs/toolkit';
import {spaceyBoisApi} from '../lib/spaceyBoisApi';

export const rootReducer = combineReducers({
    [spaceyBoisApi.reducerPath]: spaceyBoisApi.reducer,
  });
