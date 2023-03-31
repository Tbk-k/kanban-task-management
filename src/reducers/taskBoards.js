import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = [
  {
    id: 0,
    title: "Platform Launch",
    columns: [
      {
        id: 0,
        title: "Todo",
        tasks: [
          {
            id: 0,
            title: "Build UI for onboarding flow",
            description: "",
            subtasks: [
              { id: 0, title: "Sign up page", completed: true },
              { id: 1, title: "Sign in page", completed: false },
              { id: 2, title: "Welcome page", completed: false },
            ],
          },
          {
            id: 1,
            title: "Build UI for search",
            description: "",
            subtasks: [{ id: 0, title: "Search page", completed: false }],
          },
          {
            id: 2,
            title: "Build settings UI",
            description: "",
            subtasks: [
              { id: 0, title: "Account page", completed: true },
              { id: 1, title: "Billing page", completed: false },
            ],
          },
          {
            id: 3,
            title:
              "Research pricing points of various competitors and trial different business models",
            description:
              "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
            subtasks: [
              {
                id: 0,
                title: "Research competitor pricing and business models",
                completed: true,
              },
              {
                id: 1,
                title: "Outline a business model that works for our solution",
                completed: true,
              },
              {
                id: 2,
                title:
                  "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                completed: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

const taskBoards = createSlice({
  name: "boards",
  initialState,
  reducers: {
    handleBoardForm: (state, action) => {
      const { boardId, board } = action.payload;
      if (boardId) {
        state[boardId] = board;
      } else {
        state.push(board);
      }
    },
    handleTaskForm: (state, action) => {
      const { boardId, columnId, task } = action.payload;
      state[boardId].columns[columnId].tasks[task.id] = task;
    },
    handleSubtask: (state, action) => {
      const { boardId, columnId, taskId, subtaskId } = action.payload;
      state[boardId].columns[columnId].tasks[taskId].subtasks[
        subtaskId
      ].completed =
        !state[boardId].columns[columnId].tasks[taskId].subtasks[subtaskId]
          .completed;
    },
    handleDeletionBoard: (state, action) => {
      console.log(state[0]);
      const { boardId } = action.payload;
      state = produce(state, (draftState) => {
        delete draftState[boardId];
      });
      console.log(state[0], state[1]);
    },
  },
});

const { actions, reducer } = taskBoards;

export const {
  handleBoardForm,
  handleTaskForm,
  handleSubtask,
  handleDeletionBoard,
} = actions;
export default reducer;
