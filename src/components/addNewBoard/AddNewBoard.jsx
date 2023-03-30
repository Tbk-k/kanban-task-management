import React, { useState } from "react";
import {
  StyledForm,
  FormGroupWrapper,
  AddBtn,
  SubmitBtn,
} from "../../styles/FormTheme.styles";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../../reducers/taskBoards";
import { resetModals } from "../../reducers/modalsSlice";
import { changeActiveBoard } from "../../reducers/activeBoard";

const AddNewBoard = () => {
  const initialState = {
    title: "New Board",
    columns: [
      { id: 0, title: "Todo", tasks: [] },
      { id: 1, title: "Doing", tasks: [] },
      { id: 2, title: "Done", tasks: [] },
    ],
  };
  const boards = useSelector((state) => state.taskBoards);
  const editedBoard = null;
  const [data, setData] = useState(editedBoard || initialState);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleChangeColumns = (e) => {
    const { id, value } = e.target;
    const columnId = parseInt(id);

    setData((prev) => ({
      ...prev,
      columns: prev.columns.map((column) => {
        if (column.id === columnId) {
          return { ...column, title: value };
        }
        return column;
      }),
    }));
  };

  const handleAddColumn = () => {
    const newColumnId = data.columns.length;
    setData((prev) => ({
      ...prev,
      columns: [...prev.columns, { id: newColumnId, name: "" }],
    }));
  };

  const handleDeleteColumn = (columnId) => {
    setData((prev) => ({
      ...prev,
      columns: prev.columns.filter((column) => column.id !== columnId),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newBoard = {
      id: boards.length,
      title: data.title,
      columns: data.columns,
    };
    dispatch(addBoard(newBoard));
    dispatch(changeActiveBoard(newBoard));
    dispatch(resetModals());
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h4>Add New Board</h4>
      <label htmlFor="name">Board Name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Web Design"
        value={data.title}
        onChange={handleChangeName}
      />
      <label htmlFor="columns">Board Columns</label>
      {data.columns.map(({ id, title }) => (
        <FormGroupWrapper key={id}>
          <input
            type="text"
            id={id.toString()}
            value={title}
            placeholder="e.g. Todo"
            onChange={handleChangeColumns}
          />
          <IoClose onClick={() => handleDeleteColumn(id)} />
        </FormGroupWrapper>
      ))}
      <AddBtn type="button" onClick={handleAddColumn}>
        + Add New Column
      </AddBtn>
      <SubmitBtn> Create New Board</SubmitBtn>
    </StyledForm>
  );
};
export default AddNewBoard;
