import { createSlice } from '@reduxjs/toolkit';

export type BankSliceType = {
  bankData: [];
  userData: user[];
  userSetting: user[];
};

type user = {
  [key: string]: string | number;
};
const initialState: BankSliceType = {
  bankData: [],
  userData: [],
  userSetting: [],
};

export const bankSlice = createSlice({
  name: 'bankBoard',
  initialState,
  reducers: {
    setBankData(state, action) {
      state.bankData = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setUserSetting(state, action) {
      state.userSetting = action.payload;
    },
  },
});

export const { setBankData, setUserData, setUserSetting } = bankSlice.actions;
export default bankSlice.reducer;
