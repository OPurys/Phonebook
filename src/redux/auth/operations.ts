import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { AuthState, User, UserCredentials } from '../../types';
import { handleThunkError } from '../../utils/handleThunkError';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = (token: string) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk<
  AuthState,
  UserCredentials,
  { rejectValue: string }
>('auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post<AuthState>('users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});

export const login = createAsyncThunk<
  AuthState,
  Omit<UserCredentials, 'name'>,
  { rejectValue: string }
>('auth/login', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post<AuthState>('users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await goitApi.post('users/logout');
    } catch (error: unknown) {
      return handleThunkError(error, thunkApi);
    }
  }
);

export const refreshUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('auth/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState() as RootState;
  const token = savedToken.auth.token;

  if (!token) {
    return thunkApi.rejectWithValue('Token does not exist!');
  }

  try {
    setAuthHeader(token);
    const { data } = await goitApi.get<User>('users/current');
    return data;
  } catch (error: unknown) {
    return handleThunkError(error, thunkApi);
  }
});
