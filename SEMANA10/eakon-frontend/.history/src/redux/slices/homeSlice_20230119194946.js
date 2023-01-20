import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error:{},
  heroProducts: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
});

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;