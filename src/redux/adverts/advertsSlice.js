import { createSlice } from "@reduxjs/toolkit";
import { handleFullfiled, handlePending, handleRejected } from "./handlers";
import { fetchAdverts } from "./operations";

const initialState = {
  items: [],
  pageLimit: 12,
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, handleFullfiled)
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { addFavorites, deleteFavorites } = advertsSlice.actions;
