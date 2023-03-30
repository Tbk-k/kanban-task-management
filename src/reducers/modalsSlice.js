import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardMenu: false,
  addNewBoard: false,
  addNewTask: false,
  taskPreview: false,
  editDeleteMenu: false,
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
      state.taskPreview = !state.taskPreview;
    },
    toggleEditDeleteMenu: (state) => {
      state.editDeleteMenu = !state.editDeleteMenu;
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
  toggleEditDeleteMenu,
  resetModals,
} = actions;
export default reducer;
