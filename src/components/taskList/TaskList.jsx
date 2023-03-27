import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modals from "../modals/Modals";
import { StyledEmptyMessage, TaskListWrapper } from "./TaskList.styles";
import { toggleAddNewTask } from "../../reducers/modalsSlice";
const TaskList = () => {
  const boards = useSelector((state) => state.taskBoard);
  const activeBoard
  const dispatch = useDispatch();

  useEffect(()=>{},[])

  let isEmptyBoard = true;
  useEffect(() => {
    isEmptyBoard = board.columns.length === 0;?
  }, []);

  const handleAddNewTask = () => {
    dispatch(toggleAddNewTask());
  };
  return (
    <>
      <TaskListWrapper>
        {isEmptyBoard && (
          <StyledEmptyMessage>
            <h3>This board is empty. Create a new task to get started.</h3>
            <button onClick={handleAddNewTask}>+ Add New Task</button>
          </StyledEmptyMessage>
        )}
      </TaskListWrapper>
      <Modals />
    </>
  );
};

export default TaskList;
