import { createSlice } from "@reduxjs/toolkit";
import { fetchReadHeroProducts } from "../thunks/homethunks";
import { fetchReadBeastSellersProducts } from "../thunks/homethunks"

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
  bestSellersProducts: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHeroProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHeroProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadHeroProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
    builder.addCase(fetchReadBeastSellersProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadBeastSellersProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadBeastSellersProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
  }
});

export default homeSlice.reducer;