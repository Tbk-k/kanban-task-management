import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themeSlice";
import taskBoards from "../reducers/taskBoards";
import activeBoard from "../reducers/activeBoard";

export const store = configureStore({
  reducer: {
    themeSlice,
    taskBoards,
    activeBoard
  },
});
