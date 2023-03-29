import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: null,
  task: { columnId: null, taskId: null },
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setEditedBoard: (state, action) => {
      state.board = action.payload;
    },
    setEditedTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

const { actions, reducer } = editSlice;
export const { setEditedBoard, setEditedTask } = actions;
export default reducer;
