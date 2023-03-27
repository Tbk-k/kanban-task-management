import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledNavbar } from "./Navbar.styles";
import { ReactComponent as MobileLogo } from "../../img/logo-mobile.svg";
import { GoPlus } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { toggleAddNewTask, toggleBoardMenu } from "../../reducers/modalsSlice";

const Navbar = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const activeBoard = useSelector((state) => state.activeBoard);
  const dispatch = useDispatch();
  let boardIsEmpty = activeBoard.columns.length === 0;

  const handleAddNewTask = () => {
    if (boardIsEmpty) return;
    dispatch(toggleAddNewTask());
  };

  return (
    <StyledNavbar isDarkTheme={isDarkTheme} isEmpty={boardIsEmpty}>
      <div>
        <MobileLogo />
        <h2>
          {activeBoard.title || "New Board"}
          <FaChevronDown />
        </h2>
      </div>
      <div>
        <button onClick={handleAddNewTask}>
          <GoPlus />
        </button>
        <FiMoreVertical
          onClick={() => {
            dispatch(toggleBoardMenu());
          }}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
