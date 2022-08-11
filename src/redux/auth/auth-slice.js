import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.loading = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.loading = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.user = { name: '', email: '' };
      state.loading = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.loading = true;
    },
  },
});

export default authSlice.reducer;
