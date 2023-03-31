import React, { useState } from "react";
import {
  StyledForm,
  FormGroupWrapper,
  AddBtn,
  SubmitBtn,
} from "../../styles/FormTheme.styles";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { handleBoardForm } from "../../reducers/taskBoards";
import { resetModals } from "../../reducers/modalsSlice";
import { changeActiveBoard } from "../../reducers/activeBoard";
import { setPreviousBoard } from "../../reducers/previousSlice";

const BoardForm = () => {
  const boards = useSelector((state) => state.taskBoards);
  const { boardId } = useSelector((state) => state.previousSlice.board);
  const initialState = {
    title: "New Board",
    id: boards.length,
    columns: [
      { id: 0, title: "Todo", tasks: [] },
      { id: 1, title: "Doing", tasks: [] },
      { id: 2, title: "Done", tasks: [] },
    ],
  };
  const [board, setBoard] = useState(boardId ? boards[boardId] : initialState);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setBoard((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleChangeColumns = (e) => {
    const { id, value } = e.target;
    const columnId = parseInt(id);

    setBoard((prev) => ({
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
    const newColumnId = board.columns.length;
    setBoard((prev) => ({
      ...prev,
      columns: [...prev.columns, { id: newColumnId, name: "" }],
    }));
  };

  const handleDeleteColumn = (columnId) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.filter((column) => column.id !== columnId),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleBoardForm({ boardId, board }));
    dispatch(changeActiveBoard(board));
    dispatch(setPreviousBoard({ boardId: null }));
    dispatch(resetModals());
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h4>{boardId ? "Edit Board" : "Add New Board"}</h4>
      <label htmlFor="name">Board Name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Web Design"
        value={board.title}
        onChange={handleChangeName}
      />
      <label htmlFor="columns">Board Columns</label>
      {board.columns.map(({ id, title }) => (
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
      <SubmitBtn>{boardId ? "Save Changes" : "Create New Board"}</SubmitBtn>
    </StyledForm>
  );
};
export default BoardForm;
