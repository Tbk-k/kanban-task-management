import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  AddBtn,
  FormGroupWrapper,
  StyledForm,
  StyledSelect,
  SubmitBtn,
} from "../../styles/FormTheme.styles";
import { handleTaskForm } from "../../reducers/taskBoards";
import { resetModals } from "../../reducers/modalsSlice";
import { setEditedTask } from "../../reducers/editSlice";

const TaskForm = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const activeBoard = useSelector((state) => state.activeBoard);
  const { columnId, taskId } = useSelector((state) => state.editSlice.task);
  const dispatch = useDispatch();
  const [column, setColumn] = useState(0);
  const initialTaskState = {
    id: taskId || activeBoard.columns[0].tasks.length,
    title: "",
    description: "",
    subtasks: [{ id: "", title: "", completed: false }],
  };
  const [createdTask, setCreatedTask] = useState(initialTaskState);

  useEffect(() => {
    if (columnId != null && taskId != null) {
      const { id, title, description, subtasks } =
        activeBoard.columns[columnId].tasks[taskId];
      setCreatedTask({ id, title, description, subtasks });
      setColumn(columnId);
    }
    return () => {
      dispatch(setEditedTask({ columnId: null, taskId: null }));
    };
  }, [columnId, taskId, activeBoard, dispatch]);

  const handleChange = (e, subtaskId = null) => {
    const { name, value } = e.target;
    if (name === "subtask") {
      setCreatedTask((prev) => ({
        ...prev,
        subtasks: prev.subtasks.map((subtask) => {
          if (subtask.id === subtaskId.id) {
            return { ...subtask, title: value };
          } else {
            return subtask;
          }
        }),
      }));
    } else {
      setCreatedTask((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleColumnChange = (e) => {
    const { value } = e.target;
    setColumn(value);
  };

  const addNewSubtask = () => {
    setCreatedTask((prev) => ({
      ...prev,
      subtasks: [
        ...prev.subtasks,
        { id: prev.subtasks.length, title: "", completed: false },
      ],
    }));
  };

  const deleteSubtask = (e, index) => {
    setCreatedTask((prev) => ({
      ...prev,
      subtasks: prev.subtasks.filter(({ id, ...props }) => id !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = activeBoard;
    dispatch(
      handleTaskForm({
        boardId: id,
        columnId: parseInt(column),
        task: createdTask,
      })
    );
    dispatch(resetModals());
  };
  return (
    <>
      <StyledForm isDarkTheme={isDarkTheme} onSubmit={handleSubmit}>
        <h4>Add New Task</h4>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="e.g. Take coffee break"
          value={createdTask.title}
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          placeholder="e.g. It’s always good to take a break. This
15 minute break will  recharge the batteries
a little."
          value={createdTask.description}
          onChange={handleChange}
          name="description"
        />
        <label htmlFor="subtasks">Subtasks</label>
        {createdTask.subtasks?.map(({ id, title }) => (
          <FormGroupWrapper isDarkTheme={isDarkTheme} key={id} id={id}>
            <input
              type="text"
              placeholder="e.g. Make coffee"
              value={title}
              id={id}
              name="subtask"
              required
              onChange={(e) => handleChange(e, { id })}
            />
            <IoClose onClick={(e) => deleteSubtask(e, id)} />
          </FormGroupWrapper>
        ))}
        <AddBtn type="button" isDarkTheme={isDarkTheme} onClick={addNewSubtask}>
          + Add New Subtask
        </AddBtn>
        <label htmlFor="">Column</label>
        <StyledSelect
          isDarkTheme={isDarkTheme}
          value={column}
          onChange={handleColumnChange}
        >
          {activeBoard.columns?.map(({ title, id }) => (
            <option value={id} key={id}>
              {title}
            </option>
          ))}
        </StyledSelect>
        <SubmitBtn>Create Task</SubmitBtn>
      </StyledForm>
    </>
  );
};

export default TaskForm;
