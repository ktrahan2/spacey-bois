import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {spaceyBoisApi} from '../lib/spaceyBoisApi';

export const rootReducer = combineReducers({
    [spaceyBoisApi.reducerPath]: spaceyBoisApi.reducer,
    user: userReducer,
  });
