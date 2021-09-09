import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  productName: '',
  headline: '',
  min: 0,
  max: 0,
  baseRecipePrice: 0,
  shippingPrice: 0,
};

export const boxConfigSlice = createSlice({
  name: 'boxConfig',
  initialState: initialState,
  reducers: {
    setBoxConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetBoxConfig: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const { setBoxConfig, resetBoxConfig } = boxConfigSlice.actions;

export const boxConfigSelector = (state) => state.boxConfig;

export default boxConfigSlice.reducer;
