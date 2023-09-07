import { createReducer } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import fetchRecipesThunk from '../../middlewares/fetchRecipesThunk';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: [],
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRecipesThunk.fulfilled, (state, action) => {
    state.list = action.payload;
  });
});

export default recipesReducer;
