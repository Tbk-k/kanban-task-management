import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../modals/Modals";
import {
  AddNewColumnBtn,
  StyledEmptyMessage,
  TaskListWrapper,
} from "./TasksList.styles";
import TasksColumn from "../tasksColumn/TasksColumn";
import { toggleBoardForm, toggleTaskForm } from "../../reducers/modalsSlice";
import { setPreviousBoard } from "../../reducers/previousSlice";

const TaskList = ({ isEmptyBoard }) => {
  const activeBoard = useSelector((state) => state.activeBoard);
  const { isDarkTheme } = useSelector((state) => state.themeSlice);

  const dispatch = useDispatch();

  const handleAddNewTask = () => {
    dispatch(toggleTaskForm());
  };

  const handleAddColumn = (e) => {
    const { boardId } = e.target.dataset;
    dispatch(setPreviousBoard({ boardId }));
    dispatch(toggleBoardForm());
  };

  return (
    <>
      <TaskListWrapper isEmptyBoard={isEmptyBoard}>
        {isEmptyBoard && (
          <StyledEmptyMessage>
            <h3>This board is empty. Create a new column to get started.</h3>
            <button onClick={handleAddColumn} data-board-id={activeBoard.id}>
              + Add New Column
            </button>
          </StyledEmptyMessage>
        )}

        {!isEmptyBoard &&
          activeBoard.columns?.map(({ ...props }) => (
            <TasksColumn key={props.id} {...props} />
          ))}
        {!isEmptyBoard && (
          <AddNewColumnBtn
            isDarkTheme={isDarkTheme}
            id={activeBoard.id}
            data-board-id={activeBoard.id}
            onClick={handleAddColumn}
          >
            + New Column
          </AddNewColumnBtn>
        )}
      </TaskListWrapper>
      <Modals />
    </>
  );
};

export default TaskList;
