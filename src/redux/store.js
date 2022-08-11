import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './contacts/contacts-reducers';
import contactsSlice from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
