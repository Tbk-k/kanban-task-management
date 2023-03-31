import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledNavbar } from "./Navbar.styles";
import { ReactComponent as MobileLogo } from "../../img/logo-mobile.svg";
import { GoPlus } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { toggleBoardMenu, toggleTaskForm } from "../../reducers/modalsSlice";
import EditDeleteMenu from "../editDeleteMenu/EditDeleteMenu";
import { setPreviousBoard } from "../../reducers/previousSlice";

const Navbar = ({ isEmptyBoard }) => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const activeBoard = useSelector((state) => state.activeBoard);
  const [menuIsShown, setMenuState] = useState(false);
  const dispatch = useDispatch();
  const handleAddNewTask = () => {
    if (isEmptyBoard) return;
    dispatch(toggleTaskForm());
  };

  const handleMenuState = () => {
    setMenuState((prev) => !prev);
  };

  const handleClick = (e) => {
    const { boardId } = e.target.dataset;
    dispatch(setPreviousBoard({ boardId }));
    handleMenuState();
  };

  return (
    <StyledNavbar
      isDarkTheme={isDarkTheme}
      isEmpty={isEmptyBoard}
      menuIsShown={menuIsShown}
    >
      <div>
        <MobileLogo />
        <h2 data-board-id={activeBoard.id} onClick={handleClick}>
          {activeBoard.title || "New Board"}
          <FaChevronDown />
        </h2>
        <EditDeleteMenu
          menuState={menuIsShown}
          toggleMenuState={handleMenuState}
        />
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
