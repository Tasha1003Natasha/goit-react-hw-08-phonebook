import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenAuth } from 'API/API';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    return toast.error('Oops something went wrong!');
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenAuth.set(data.token);
    return data;
  } catch (error) {
    return toast.error('Oops something went wrong!');
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    tokenAuth.unset();
  } catch (error) {
    return toast.error('Oops something went wrong!');
  }
});

export const getRefresh = createAsyncThunk(
  'auth/getRefresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue('Oops something went wrong');
    }
    tokenAuth.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return toast.error('Oops something went wrong!');
    }
  }
);
