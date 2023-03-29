import React from "react";
import { useSelector } from "react-redux";

import SubtasksSummary from "../subtasksSummary/SubtasksSummary";
import { StyledTaskItem } from "./TaskItem.styles";

const TaskItem = ({ ...props }) => {
  const { id, columnId, title, subtasks } = props;
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);

  return (
    <StyledTaskItem isDarkTheme={isDarkTheme} id={id}>
      <h5>{title}</h5>
      <SubtasksSummary subtasks={subtasks} />
      <span data-task-id={id} data-column-id={columnId} />
    </StyledTaskItem>
  );
};

export default TaskItem;
