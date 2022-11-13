import { createSlice } from '@reduxjs/toolkit';

export type LoginSliceType = {
  isLogged: boolean;
  user: userForm[];
};

type userForm = { email: string; password: string };

const initialState: LoginSliceType = {
  isLogged: false,
  user: [],
};

export const loginSlice = createSlice({
  name: 'userLogin',
  initialState,
  reducers: {
    loginAccount(state, action) {
      state.isLogged = true;
      state.user = action.payload;
    },
    logoutAccount(state) {
      (state.isLogged = false), (state.user = []);
    },
  },
});

export const { loginAccount, logoutAccount } = loginSlice.actions;
export default loginSlice.reducer;
