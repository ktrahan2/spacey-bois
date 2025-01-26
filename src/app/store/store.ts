import type {Action, ThunkAction} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {spaceyBoisApi} from './spaceyBoisApi';

export const store = configureStore({
  reducer: {
    [spaceyBoisApi.reducerPath]: spaceyBoisApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(spaceyBoisApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
