import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggerIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggerIn = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggerIn = true;
      state.loading = false;
    },
    [logIn.pending]: state => {
      state.loading = true;
    },
    [logOut.fulfilled]: state => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLoggerIn = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggerIn = true;
    },
  },
});

export default authSlice.reducer;
