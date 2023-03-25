import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     title: "",
//     taskLists: [
//       {
//         id: 1,
//         title: "",
//         tasks: [{ id: 1, title: "", description: "", completed: false }],
//       },
//     ],
//   },
// ];

const initialState = [];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export default boardSlice.reducer;
