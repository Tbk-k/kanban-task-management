import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themeSlice";
import boardSlice from "../reducers/boardSlice";

export const store = configureStore({
  reducer: {
    themeSlice,
    boardSlice,
  },
});
