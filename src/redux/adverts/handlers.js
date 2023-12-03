export const handleFullfiled = (state, { payload }) => {
  state.page = state.page + 1;
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...payload];
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
