import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

const loginThunk = createAsyncThunk('user/LOGIN', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const result = await axios.post(
    'https://orecipes-api.onrender.com/api/login',
    {
      email: 'bob@mail.io',
      password: 'bobo',
    }
  );
  // console.log(result);

  return result.data;
});

export default loginThunk;
