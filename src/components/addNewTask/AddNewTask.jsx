import React, { useState } from "react";
import {
  AddSubtaskBtn,
  AddTaskForm,
  CreateTask,
  StatusSelect,
  SubtaskWrapper,
} from "./AddNewTask.styles";
import Backdrop from "../backdrop/Backdrop";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

const AddNewTask = ({ handleAddTask }) => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const [subtasks, setSubtasks] = useState([{ id: 0, value: "" }]);

  const handleAddSubtask = () => {
    let id = subtasks.length;
    setSubtasks((prev) => [...prev, { id, value: "" }]);
  };

  const handleDeteleSubtask = (subtask) => {
    setSubtasks(subtasks.filter((s) => s !== subtask));
  };
  return (
    <>
      <AddTaskForm isDarkTheme={isDarkTheme}>
        <h4>Add New Task</h4>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="e.g. Take coffee break" />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          placeholder="e.g. It’s always good to take a break. This
15 minute break will  recharge the batteries
a little."
        />
        <label htmlFor="subtasks">Subtasks</label>

        {subtasks?.map((props) => (
          <SubtaskWrapper
            isDarkTheme={isDarkTheme}
            key={props.id}
            id={props.id}
          >
            <input
              type="text"
              placeholder="e.g. Make coffee"
              value={props.value}
              required
            />
            <IoClose onClick={() => handleDeteleSubtask(props)} />
          </SubtaskWrapper>
        ))}
        <AddSubtaskBtn
          type="button"
          isDarkTheme={isDarkTheme}
          onClick={handleAddSubtask}
        >
          + Add New Subtask
        </AddSubtaskBtn>
        <label htmlFor="">Status</label>
        <StatusSelect isDarkTheme={isDarkTheme}>
          <option value="">Todo</option>
          <option value="">Doing</option>
          <option value="">Done</option>
        </StatusSelect>
        <CreateTask>Create Task</CreateTask>
      </AddTaskForm>
      ;
      <Backdrop onClick={handleAddTask} />
    </>
  );
};

export default AddNewTask;
