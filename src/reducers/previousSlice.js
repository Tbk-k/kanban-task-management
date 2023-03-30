import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: null,
  task: { columnId: null, taskId: null },
};

const previousSlice = createSlice({
  name: "previous",
  initialState,
  reducers: {
    setPreviousBoard: (state, action) => {
      state.board = action.payload;
    },
    setPreviousTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

const { actions, reducer } = previousSlice;
export const { setPreviousBoard, setPreviousTask } = actions;
export default reducer;
