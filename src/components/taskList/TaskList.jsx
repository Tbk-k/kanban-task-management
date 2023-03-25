import React, { useState } from "react";
import AddNewTask from "../addNewTask/AddNewTask";
import { StyledEmptyMessage, TaskListWrapper } from "./TaskList.styles";

const TaskList = () => {
  const [addTask, setAddTask] = useState(false);
  const handleAddTask = () => {
    setAddTask((prev) => !prev);
  };
  return (
    <TaskListWrapper>
      <StyledEmptyMessage>
        <h3>This board is empty. Create a new task to get started.</h3>
        <button onClick={handleAddTask}>+ Add New Task</button>
      </StyledEmptyMessage>
      {addTask && <AddNewTask handleAddTask={handleAddTask} />}
    </TaskListWrapper>
  );
};

export default TaskList;
