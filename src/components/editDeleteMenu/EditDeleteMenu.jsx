import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  toggleBoardForm,
  toggleDeletionWarning,
  toggleTaskForm,
  toggleTaskPreview,
} from "../../reducers/modalsSlice";

const StyledMenu = styled.menu`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  bottom: -100px;
  right: -20px;
  border-radius: 8px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.veryDarkGrey : theme.colors.white};
  width: 100%;
  padding: ${({ menuState }) => (menuState ? "16px" : "0px")};
  max-width: ${({ menuState }) => (menuState ? "150px" : "0px")};
  overflow: hidden;
  transition: ${({ menuState }) => (!menuState ? "" : "max-width .3s")};
  z-index: 1;
  li {
    font: ${({ theme }) => theme.fonts.body.l};
    cursor: pointer;
    &:first-of-type {
      color: ${({ theme }) => theme.colors.mediumGrey};
      margin-bottom: 16px;
      &:hover {
        color: ${({ theme, isDarkTheme }) =>
          isDarkTheme ? theme.colors.white : theme.colors.black};
      }
    }
    &:last-of-type {
      color: ${({ theme }) => theme.colors.red};
      &:hover {
        color: ${({ theme }) => theme.colors.redHover};
      }
    }
  }
`;

const EditDeleteMenu = ({ menuState, toggleMenuState }) => {
  const { isDarkTheme } = useSelector((state) => state.themeSlice);
  const {
    board: { boardId },
    task: { taskId },
  } = useSelector((state) => state.previousSlice);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (taskId) {
      dispatch(toggleTaskForm());
      dispatch(toggleTaskPreview());
    } else if (boardId) {
      console.log(boardId);
      dispatch(toggleBoardForm());
    }
    toggleMenuState();
  };

  const handleDelete = () => {
    if (taskId || boardId) {
      dispatch(toggleDeletionWarning());
    }
    toggleMenuState();
  };

  return (
    <StyledMenu isDarkTheme={isDarkTheme} menuState={menuState}>
      <li onClick={handleEdit}>Edit</li>
      <li onClick={handleDelete}>Delete</li>
    </StyledMenu>
  );
};

export default EditDeleteMenu;
