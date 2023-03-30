import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themeSlice";
import taskBoards from "../reducers/taskBoards";
import activeBoard from "../reducers/activeBoard";
import modalSlice from "../reducers/modalsSlice";
import previousSlice from "../reducers/previousSlice";
export const store = configureStore({
  reducer: {
    themeSlice,
    taskBoards,
    activeBoard,
    modalSlice,
    previousSlice,
  },
});
