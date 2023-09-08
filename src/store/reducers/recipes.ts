import { createReducer } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import {
  fetchFavRecipesThunk,
  fetchRecipesThunk,
} from '../../middlewares/fetchRecipesThunk';

interface RecipesState {
  list: Recipe[];
  favList: Recipe[];
}
export const initialState: RecipesState = {
  list: [],
  favList: [],
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    .addCase(fetchFavRecipesThunk.fulfilled, (state, action) => {
      state.favList = action.payload;
    });
});

export default recipesReducer;
