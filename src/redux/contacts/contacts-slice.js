import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false,
  },
  reducers: {
    filterUser: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: state => {
      state.loading = false;
    },
    [fetchAddContact.pending]: state => {
      state.loading = true;
    },
    [fetchAddContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items.push(payload);
    },
    [fetchContacts.rejected]: state => {
      state.loading = false;
    },
    [fetchDeleteContact.pending]: state => {
      state.loading = true;
    },
    [fetchDeleteContact.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.items = state.items.filter(el => el.id !== payload);
    },
    [fetchDeleteContact.rejected]: state => {
      state.loading = false;
    },
  },
});

export const { filterUser } = contactsSlice.actions;
export default contactsSlice.reducer;
