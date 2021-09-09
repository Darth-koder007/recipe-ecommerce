import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    setRecipeData: (state, action) => {
      return [...state, ...action.payload];
    },
    resetRecipeData: (state) => {
      return [...state, ...initialState];
    },
    addSelectedRecipe: (state, action) => {
      for (const recipe of state) {
        if (action.payload.id === recipe.id) {
          recipe.selected++;
          break;
        }
      }
    },
    removeSelectedRecipe: (state, action) => {
      for (const recipe of state) {
        if (action.payload.id === recipe.id) {
          recipe.selected--;
          break;
        }
      }
    },
  },
});

export const {
  setRecipeData,
  resetRecipeData,
  addSelectedRecipe,
  removeSelectedRecipe,
} = recipesSlice.actions;

export const recipesSelector = (state) => state.recipes;

export default recipesSlice.reducer;
