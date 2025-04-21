import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSearchQuery: (state) => {
      state.query = "";
    },
  },
});

// Export actions
export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;

// Selectors
export const selectSearchQuery = (state) => state.search.query;

export default searchSlice.reducer;
