import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlice";
import movieReducer from "../movieSlice";
import AI_SearchReducer from "../AI_SearchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    search: AI_SearchReducer,
  },
});

export default store;
