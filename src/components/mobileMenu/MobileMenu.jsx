import React from "react";
import { AddBoard, MenuItem, StyledMobileMenu } from "./MobileMenu.styles";
import { TbLayoutBoardSplit } from "react-icons/tb";
import ThemePicker from "../themePicker/ThemePicker";
import { useSelector } from "react-redux";

const MobileMenu = ({ setMenuState, setAddNewBoardFormStatus }) => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const activeBoard = useSelector((state) => state.activeBoard);
  const taskBoards = useSelector((state) => state.taskBoards);

  const handleAddBoard = () => {
    setMenuState((prev) => !prev);
    setAddNewBoardFormStatus((prev) => !prev);
  };

  return (
    <StyledMobileMenu isDarkTheme={isDarkTheme}>
      <h4>ALL BOARDS ({taskBoards.length})</h4>
      {taskBoards?.map(({ id, title }) => (
        <MenuItem className={id === activeBoard.id ? "active" : null} key={id}>
          <TbLayoutBoardSplit />
          {title}
        </MenuItem>
      ))}

      <AddBoard onClick={handleAddBoard}>
        <TbLayoutBoardSplit />+ Create New Board
      </AddBoard>
      <ThemePicker />
    </StyledMobileMenu>
  );
};

export default MobileMenu;
