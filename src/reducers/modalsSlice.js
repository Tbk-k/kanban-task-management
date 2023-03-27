import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardMenu: false,
  addNewBoard: false,
  addNewTask: false,
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
    toggleAddNewTask: (state) => {
      state.addNewTask = !state.addNewTask;
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
  toggleAddNewTask,
  resetModals,
} = actions;
export default reducer;
