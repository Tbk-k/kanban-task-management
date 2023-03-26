import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyledNavbar } from "./Navbar.styles";
import { ReactComponent as MobileLogo } from "../../img/logo-mobile.svg";
import { GoPlus } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Backdrop from "../backdrop/Backdrop";
import MobileMenu from "../mobileMenu/MobileMenu";
import AddNewBoard from "../addNewBoard/AddNewBoard";

const Navbar = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const [isMenuShown, setMenuState] = useState(false);
  const [showAddNewBaordForm, setAddNewBoardFormStatus] = useState(false);

  const activeBoard = useSelector((state) => state.activeBoard);

  const handleMenuState = () => {
    setMenuState((prev) => !prev);
  };

  return (
    <>
      <StyledNavbar isDarkTheme={isDarkTheme}>
        <div>
          <MobileLogo />
          <h2>
            {activeBoard.title || "New Board"}
            <FaChevronDown />
          </h2>
        </div>
        <div>
          <button>
            <GoPlus />
          </button>
          <FiMoreVertical onClick={handleMenuState} />
        </div>
      </StyledNavbar>
      {isMenuShown && (
        <>
          <Backdrop onClick={handleMenuState} />
          <MobileMenu
            setMenuState={setMenuState}
            setAddNewBoardFormStatus={setAddNewBoardFormStatus}
          />
        </>
      )}
      {showAddNewBaordForm && (
        <>
          <Backdrop onClick={() => setAddNewBoardFormStatus(false)} />
          <AddNewBoard />
        </>
      )}
    </>
  );
};

export default Navbar;
