import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardMenu: false,
  addNewBoard: false,
  addNewTask: false,
  taskPreview: false,
  editDeleteMenu: false,
  deletionWarning: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleBoardMenu: (state) => {
      state.boardMenu = !state.boardMenu;
    },
    toggleBoardForm: (state) => {
      state.addNewBoard = !state.addNewBoard;
    },
    toggleTaskForm: (state) => {
      state.addNewTask = !state.addNewTask;
    },
    toggleTaskPreview: (state) => {
      state.taskPreview = !state.taskPreview;
    },
    toggleDeletionWarning: (state) => {
      state.deletionWarning = !state.deletionWarning;
    },
    resetModals: (state) => {
      return initialState;
    },
  },
});

const { actions, reducer } = modalSlice;
export const {
  toggleBoardMenu,
  toggleBoardForm,
  toggleTaskForm,
  toggleTaskPreview,
  toggleDeletionWarning,
  resetModals,
} = actions;
export default reducer;
