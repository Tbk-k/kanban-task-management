import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskPreview } from "../../reducers/modalsSlice";
import { setPreviousTask } from "../../reducers/previousSlice";

import TaskItem from "../taskItem/TaskItem";
import { StyledTasksColumn } from "./TasksColumn.styles";

const TasksColumn = ({ ...props }) => {
  const { id, title, tasks } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const {
      dataset: { columnId, taskId },
    } = e.target;
    if ((columnId, taskId)) {
      dispatch(setPreviousTask({ columnId, taskId }));
      dispatch(toggleTaskPreview());
    }
  };

  return (
    <StyledTasksColumn id={props.id} data-name="column" onClick={handleClick}>
      <h4>
        <span />
        {title} ({tasks?.length || 0})
      </h4>
      {tasks?.map(({ ...props }) => (
        <TaskItem key={props.id} {...props} columnId={id} />
      ))}
    </StyledTasksColumn>
  );
};

export default TasksColumn;
