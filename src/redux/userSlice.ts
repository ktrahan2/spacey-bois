import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@root/types';
import {REDUX_STATE_STATUS, ReduxStateStatusValue} from '@root/types/constants';

export type UserState = {
  error: boolean;
  status: ReduxStateStatusValue;
  value: User | null;
};

const initialState: UserState = {
  error: false,
  status: REDUX_STATE_STATUS.IDLE,
  value: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    clearUser: () => initialState,
  },
  selectors: {
    selectUserState: (userState) => userState,
    selectUser: (userState) => userState.value,
    selectUserStatus: (userState) => userState.status,
  },
});

export const {clearUser, setUser} = userSlice.actions;
export const {selectUserState, selectUserStatus, selectUser} =
  userSlice.selectors;

export default userSlice.reducer;
