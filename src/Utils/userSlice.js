import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userAuth",
  initialState: null,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: (state, action) => null,
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
