import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducer/loginSlice';
import bankReducer from './reducer/bankSlice';

const reducer = combineReducers({
  loginData: loginReducer,
  bankBoardData: bankReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
