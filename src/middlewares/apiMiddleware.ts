import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const actionGetRecipes = createAsyncThunk('recipes/GET_RECIPES', async () => {
  const result = await axios.get(
    'https://orecipes-api.onrender.com/api/recipes'
  );
  console.log(result);

  return result.data;
});

export default actionGetRecipes;
