import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BtnWrapper, WarningWrapper } from "./DeletionWarning.styles";
import { toggleDeletionWarning } from "../../reducers/modalsSlice";
import {
  setPreviousBoard,
  setPreviousTask,
} from "../../reducers/previousSlice";
import { handleDeletionBoard } from "../../reducers/taskBoards";

const DeletionWarning = () => {
  const { isDarkTheme } = useSelector((state) => state.themeSlice);
  const {
    board: { boardId },
    task: { columnId, taskId },
  } = useSelector((state) => state.previousSlice);
  const activeBoard = useSelector((state) => state.activeBoard);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (boardId) {
      dispatch(handleDeletionBoard({ boardId }));
    }
    dispatch(toggleDeletionWarning());
  };

  const handleCancel = () => {
    dispatch(toggleDeletionWarning());
    dispatch(setPreviousTask({ columnId: null, taskId: null }));
    dispatch(setPreviousBoard({ boardId: null }));
  };
  return (
    <WarningWrapper isDarkTheme={isDarkTheme}>
      <h5>{boardId ? "Delete this board?" : "Delete this task?"}</h5>
      <p>
        {boardId
          ? `Are you sure you want to delete the '${activeBoard.title}' board? This action will remove all columns and tasks and cannot be reversed.`
          : `Are you sure you want to delete the '${activeBoard.columns[columnId].tasks[taskId].title}' task and its subtasks? This action cannot be reversed.`}
      </p>
      <BtnWrapper>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleCancel}>Cancel</button>
      </BtnWrapper>
    </WarningWrapper>
  );
};

export default DeletionWarning;
