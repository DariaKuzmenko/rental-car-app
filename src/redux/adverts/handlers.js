export const handleFullfiled = (state, action) => {
  state.page = state.page + 1;
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
