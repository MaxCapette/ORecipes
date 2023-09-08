import { createReducer } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import {
  fetchFavRecipesThunk,
  fetchRecipesThunk,
} from '../../middlewares/fetchRecipesThunk';

interface RecipesState {
  list: Recipe[];
  favList: Recipe[];
  isLoading: boolean;
}
export const initialState: RecipesState = {
  list: [],
  favList: [],
  isLoading: true,
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchRecipesThunk.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchFavRecipesThunk.fulfilled, (state, action) => {
      state.favList = action.payload;
      state.isLoading = false;
    });
});

export default recipesReducer;
