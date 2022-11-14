import { createSlice } from '@reduxjs/toolkit';

export type BankSliceType = {
  bankData: [];
  userData: user[];
};

type user = {
  [key: string]: string | number;
};
const initialState: BankSliceType = {
  bankData: [],
  userData: [],
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
  },
});

export const { setBankData, setUserData } = bankSlice.actions;
export default bankSlice.reducer;
