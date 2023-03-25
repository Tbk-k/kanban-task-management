import React from "react";
import { AddBoard, MenuItem, StyledMobileMenu } from "./MobileMenu.styles";
import { TbLayoutBoardSplit } from "react-icons/tb";
import ThemePicker from "../themePicker/ThemePicker";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  return (
    <StyledMobileMenu isDarkTheme={isDarkTheme}>
      <h4>ALL BOARDS (0)</h4>
      <MenuItem className="active">
        <TbLayoutBoardSplit />
        New Board
      </MenuItem>
      <MenuItem>
        <TbLayoutBoardSplit />
        Marketing Plan
      </MenuItem>
      <AddBoard>
        <TbLayoutBoardSplit />+ Create New Board
      </AddBoard>
      <ThemePicker />
    </StyledMobileMenu>
  );
};

export default MobileMenu;
