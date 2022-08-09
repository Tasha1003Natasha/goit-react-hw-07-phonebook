import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/contacts-reducers';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
