import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducer/loginSlice';

const reducer = combineReducers({
  loginData: loginReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
