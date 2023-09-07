import { createReducer } from '@reduxjs/toolkit';
import data from '../../data';
import { Recipe } from '../../@types/recipe';
import actionGetRecipes from '../../middlewares/apiMiddleware';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: data,
};

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionGetRecipes.fulfilled, (state, action) => {
    state.list = action.payload;
  });
});

export default recipesReducer;
