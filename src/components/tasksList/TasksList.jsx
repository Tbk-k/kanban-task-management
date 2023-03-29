import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../modals/Modals";
import { StyledEmptyMessage, TaskListWrapper } from "./TasksList.styles";
import TasksColumn from "../tasksColumn/TasksColumn";
import { toggleTaskForm } from "../../reducers/modalsSlice";

const TaskList = ({ isEmptyBoard }) => {
  const activeBoard = useSelector((state) => state.activeBoard);

  const dispatch = useDispatch();

  const handleAddNewTask = () => {
    dispatch(toggleTaskForm());
  };
  return (
    <>
      <TaskListWrapper isEmptyBoard={isEmptyBoard}>
        {isEmptyBoard && (
          <StyledEmptyMessage>
            <h3>This board is empty. Create a new column to get started.</h3>
            <button onClick={handleAddNewTask}>+ Add New Column</button>
          </StyledEmptyMessage>
        )}
        {!isEmptyBoard &&
          activeBoard.columns?.map(({ ...props }) => (
            <TasksColumn key={props.id} {...props} />
          ))}
      </TaskListWrapper>
      <Modals />
    </>
  );
};

export default TaskList;
