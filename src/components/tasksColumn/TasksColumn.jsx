import React from "react";
import { useDispatch } from "react-redux";
import { setEditedTask } from "../../reducers/editSlice";
import { toggleTaskForm } from "../../reducers/modalsSlice";
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
      dispatch(setEditedTask({ columnId, taskId }));
      dispatch(toggleTaskForm());
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
