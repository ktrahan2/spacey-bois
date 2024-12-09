export const REDUX_STATE_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
} as const;

export type ReduxStateStatusValue =
  (typeof REDUX_STATE_STATUS)[keyof typeof REDUX_STATE_STATUS];
