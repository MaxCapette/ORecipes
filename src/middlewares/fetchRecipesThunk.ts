import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRecipesThunk = createAsyncThunk('recipes/GET_RECIPES', async () => {
  const result = await axios.get('http://localhost:3001/recipes/');
  // console.log(result);

  return result.data;
});

export default fetchRecipesThunk;
