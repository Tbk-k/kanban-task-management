import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const activeBoard = createSlice({
  name: "activeBoard",
  initialState,
  reducers: {
    changeActiveBoard: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = activeBoard;
export const { changeActiveBoard } = actions;
export default reducer;
