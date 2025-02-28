import type {Action, ThunkAction} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {spaceyBoisApi} from '../lib/spaceyBoisAPI';

export const rootReducer = combineReducers({
    [spaceyBoisApi.reducerPath]: spaceyBoisApi.reducer,
  });

export type RootState = ReturnType<typeof rootReducer>;

/**
 * @see https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
*/
export const setupStore = (preloadedState?: Partial<RootState>) => 
  configureStore({
    preloadedState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare().concat(spaceyBoisApi.middleware),  
    reducer: rootReducer,
  });

export const store = setupStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
