import React, { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
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

  const handleAddSubtask = () => {
    let id = subtasks.length;
    setSubtasks((prev) => [...prev, { id, value: "" }]);
  };

  const handleDeteleSubtask = (subtask) => {
    setSubtasks(subtasks.filter((s) => s !== subtask));
  };
  return (
    <>
      <StyledForm isDarkTheme={isDarkTheme}>
        <h4>Add New Task</h4> <label htmlFor="title">Title</label>
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
          <FormGroupWrapper
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
        <StyledSelect isDarkTheme={isDarkTheme}>
          <option value="">Todo</option>
          <option value="">Doing</option>
          <option value="">Done</option>
        </StyledSelect>
        <SubmitBtn>Create Task</SubmitBtn>
      </StyledForm>
      <Backdrop onClick={handleAddTask} />
    </>
  );
};

export default AddNewTask;
