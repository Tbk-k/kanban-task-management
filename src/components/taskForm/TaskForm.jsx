import React, { useEffect, useState, useCallback } from "react";
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
import { setPreviousTask } from "../../reducers/previousSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const activeBoard = useSelector((state) => state.activeBoard);
  const { columnId, taskId } = useSelector((state) => state.previousSlice.task);

  const [column, setColumn] = useState(0);
  const [isEdited, setIsEdited] = useState(false);

  const initialTaskState = {
    id: "",
    title: "",
    description: "",
    subtasks: [],
  };
  const [previousTaskState, setPreviousTaskState] = useState(initialTaskState);

  useEffect(() => {
    if (columnId != null && taskId != null) {
      const { id, title, description, subtasks } =
        activeBoard.columns[columnId].tasks[taskId];
      setIsEdited(true);
      setPreviousTaskState({ id, title, description, subtasks });
      setColumn(columnId);
    }
  }, [columnId, taskId, activeBoard, dispatch]);

  const handleChange = useCallback((e, subtaskId = null) => {
    const { name, value } = e.target;
    if (name === "subtask") {
      setPreviousTaskState((prev) => ({
        ...prev,
        subtasks: prev.subtasks.map((subtask) =>
          subtask.id === subtaskId.id ? { ...subtask, title: value } : subtask
        ),
      }));
    } else {
      setPreviousTaskState((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleColumnChange = useCallback((e) => {
    const { value } = e.target;
    setColumn(value);
  }, []);

  const addNewSubtask = useCallback(() => {
    setPreviousTaskState((prev) => ({
      ...prev,
      subtasks: [
        ...prev.subtasks,
        { id: prev.subtasks.length, title: "", completed: false },
      ],
    }));
  }, []);

  const deleteSubtask = useCallback((index) => {
    setPreviousTaskState((prev) => ({
      ...prev,
      subtasks: prev.subtasks.filter(({ id, ...props }) => id !== index),
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { id } = activeBoard;
      const taskIndex = taskId || activeBoard.columns[column].tasks.length;
      dispatch(
        handleTaskForm({
          boardId: id,
          columnId: parseInt(column),
          task: { ...previousTaskState, id: taskIndex },
        })
      );
      dispatch(setPreviousTask({ columnId: null, taskId: null }));
      dispatch(resetModals());
    },
    [activeBoard, column, previousTaskState, dispatch, taskId]
  );

  return (
    <>
      <StyledForm isDarkTheme={isDarkTheme} onSubmit={handleSubmit}>
        <h4>{isEdited ? "Edit task" : "Add New Task"}</h4>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="e.g. Take coffee break"
          value={previousTaskState.title}
          name="title"
          onChange={handleChange}
          required
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          placeholder="e.g. It’s always good to take a break. This
15 minute break will  recharge the batteries
a little."
          value={previousTaskState.description}
          onChange={handleChange}
          name="description"
        />
        <label htmlFor="subtasks">Subtasks</label>
        {previousTaskState.subtasks?.map(({ id, title }) => (
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
        <SubmitBtn>{isEdited ? "Save Changes" : "Create Task"}</SubmitBtn>
      </StyledForm>
    </>
  );
};

export default TaskForm;
