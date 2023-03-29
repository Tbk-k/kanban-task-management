import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardMenu: false,
  addNewBoard: false,
  addNewTask: false,
  taskPreview: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleBoardMenu: (state) => {
      state.boardMenu = !state.boardMenu;
    },
    toggleAddNewBoard: (state) => {
      state.addNewBoard = !state.addNewBoard;
    },
    toggleTaskForm: (state) => {
      state.addNewTask = !state.addNewTask;
    },
    toggleTaskPreview: (state) => {
      state.taskPreview = !state.addNewTask;
    },
    resetModals: (state) => {
      return initialState;
    },
  },
});

const { actions, reducer } = modalSlice;
export const {
  toggleBoardMenu,
  toggleAddNewBoard,
  toggleTaskForm,
  toggleTaskPreview,
  resetModals,
} = actions;
export default reducer;
