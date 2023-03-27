import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  AddBtn,
  FormGroupWrapper,
  StyledForm,
  StyledSelect,
  SubmitBtn,
} from "../../styles/FormTheme.styles";

const AddNewTask = ({ handleAddTask }) => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const [subtasks, setSubtasks] = useState([{ id: 0, value: "" }]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleAddSubtask = () => {
    let id = subtasks.length;
    setSubtasks((prev) => [...prev, { id, value: "" }]);
  };

  const handleDeteleSubtask = (subtask) => {
    setSubtasks(subtasks.filter((s) => s !== subtask));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubtaskChange = (event, id) => {
    const index = subtasks.findIndex((subtask) => subtask.id === id);
    const newSubtasks = [...subtasks];
    newSubtasks[index].value = event.target.value;
    setSubtasks(newSubtasks);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      subtasks: subtasks.map((subtask) => subtask.value),
      status,
    };
    handleAddTask(newTask);
  };

  return (
    <>
      <StyledForm isDarkTheme={isDarkTheme} onSubmit={handleSubmit}>
        <h4>Add New Task</h4> <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="e.g. Take coffee break"
          onChange={handleTitleChange}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          placeholder="e.g. It’s always good to take a break. This
15 minute break will  recharge the batteries
a little."
          onChange={handleDescriptionChange}
        />
        <label htmlFor="subtasks">Subtasks</label>
        {subtasks?.map((props) => (
          <FormGroupWrapper
            isDarkTheme={isDarkTheme}
            key={props.id}
            id={props.id}
          >
            <input
              type="text"
              placeholder="e.g. Make coffee"
              value={props.value}
              onChange={(e) => {
                handleSubtaskChange(e, props.id);
              }}
              required
            />
            <IoClose onClick={() => handleDeteleSubtask(props)} />
          </FormGroupWrapper>
        ))}
        <AddBtn
          type="button"
          isDarkTheme={isDarkTheme}
          onClick={handleAddSubtask}
        >
          + Add New Subtask
        </AddBtn>
        <label htmlFor="">Status</label>
        <StyledSelect isDarkTheme={isDarkTheme} onChange={handleStatusChange}>
          <option value="">Todo</option>
          <option value="">Doing</option>
          <option value="">Done</option>
        </StyledSelect>
        <SubmitBtn>Create Task</SubmitBtn>
      </StyledForm>
    </>
  );
};

export default AddNewTask;
