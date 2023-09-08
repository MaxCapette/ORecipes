import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

const checkLogin = createAsyncThunk('user/CHECK_LOGIN', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const result = await axios.post(
    'https://orecipes-api.onrender.com/api/login',
    {
      email: state.user.credentials.email,
      password: state.user.credentials.password,
    }
  );
  console.log(result.data);

  return result.data as { pseudo: string; token: string };
});

export default checkLogin;
