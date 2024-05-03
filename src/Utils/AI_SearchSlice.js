import { createSlice } from "@reduxjs/toolkit";

const AI_SearchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    AI_Search: false,
  },
  reducers: {
    toggleAI_Search: (state) => {
      state.AI_Search = !state.AI_Search;
    },
  },
});

export const { toggleAI_Search } = AI_SearchSlice.actions;
export default AI_SearchSlice.reducer;
