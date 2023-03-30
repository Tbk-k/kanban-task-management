import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  toggleEditDeleteMenu,
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

const EditDeleteMenu = () => {
  const { isDarkTheme } = useSelector((state) => state.themeSlice);
  const menuState = useSelector((state) => state.modalSlice.editDeleteMenu);
  const { taskId } = useSelector((state) => state.previousSlice.task);
  const dispatch = useDispatch();
  const handleEditTask = () => {
    if (taskId) {
      dispatch(toggleTaskForm());
      dispatch(toggleTaskPreview());
    }
    dispatch(toggleEditDeleteMenu());
  };
  return (
    <StyledMenu isDarkTheme={isDarkTheme} menuState={menuState}>
      <li onClick={handleEditTask}>Edit</li>
      <li>Delete</li>
    </StyledMenu>
  );
};

export default EditDeleteMenu;
