import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardMenu: false,
  sidebar: false,
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
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
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
      return { ...initialState, sidebar: state.sidebar };
    },
  },
});

const { actions, reducer } = modalSlice;
export const {
  toggleBoardMenu,
  toggleSidebar,
  toggleBoardForm,
  toggleTaskForm,
  toggleTaskPreview,
  toggleDeletionWarning,
  resetModals,
} = actions;
export default reducer;
