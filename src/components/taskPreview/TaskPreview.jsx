import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubtaskLabel, TaskPreviewWrapper } from "./TaskPreview.styles";
import { FiMoreVertical } from "react-icons/fi";
import SubtasksSummary from "../subtasksSummary/SubtasksSummary";
import { handleSubtask } from "../../reducers/taskBoards";
import EditDeleteMenu from "../editDeleteMenu/EditDeleteMenu";
import { toggleEditDeleteMenu } from "../../reducers/modalsSlice";
const TaskPreview = () => {
  const activeBoard = useSelector((state) => state.activeBoard);
  const { columnId, taskId } = useSelector((state) => state.previousSlice.task);
  const { title, description, subtasks } =
    activeBoard.columns[columnId].tasks[taskId];
  const { isDarkTheme } = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch();

  const handleChange = (e, id) => {
    dispatch(
      handleSubtask({
        boardId: activeBoard.id,
        columnId,
        taskId,
        subtaskId: id,
      })
    );
  };

  const handleMenuState = () => {
    dispatch(toggleEditDeleteMenu());
  };

  return (
    <TaskPreviewWrapper isDarkTheme={isDarkTheme}>
      <div>
        <h4>{title}</h4>
        <FiMoreVertical onClick={handleMenuState} />
        <EditDeleteMenu />
      </div>
      <p>{description}</p>
      <SubtasksSummary subtasks={subtasks} isPreview />
      {subtasks.map(({ id, title, completed }) => (
        <SubtaskLabel key={id} isDarkTheme={isDarkTheme} checked={completed}>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => handleChange(e, id)}
          />
          <h5>{title}</h5>
        </SubtaskLabel>
      ))}
    </TaskPreviewWrapper>
  );
};

export default TaskPreview;
