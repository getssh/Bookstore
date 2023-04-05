import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [] };

const catagorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { checkStatus } = catagorySlice.actions;
export default catagorySlice.reducer;
