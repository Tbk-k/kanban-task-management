import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BoardsMenu,
  BtnsWrapper,
  HideBtn,
  InnerSidebarWrapper,
  LogoWrapper,
  ShowHideBtn,
  SidebarWrapper,
  StyledSidebar,
} from "./Sidebar.styles";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { ReactComponent as LogoLight } from "../../img/logo-light.svg";
import { ReactComponent as LogoDark } from "../../img/logo-dark.svg";
import MenuItem from "../mobileMenu/menuItem/MenuItem";
import { AddBoard } from "../mobileMenu/MobileMenu.styles";
import ThemePicker from "../themePicker/ThemePicker";
import { toggleSidebar } from "../../reducers/modalsSlice";

const Sidebar = () => {
  const { isDarkTheme } = useSelector((state) => state.themeSlice);
  const sidebarState = useSelector((state) => state.modalSlice.sidebar);
  const boards = useSelector((state) => state.taskBoards);
  const dispatch = useDispatch();
  return (
    <SidebarWrapper>
      <StyledSidebar isDarkTheme={isDarkTheme} sidebarState={sidebarState}>
        <InnerSidebarWrapper>
          <LogoWrapper>
            {isDarkTheme ? <LogoLight /> : <LogoDark />}
          </LogoWrapper>
          <BoardsMenu>
            <h5>All boards ({boards.length})</h5>
            {boards.map(({ id, title }) => (
              <MenuItem key={id} id={id} title={title} />
            ))}
            <AddBoard>+ Create New Board</AddBoard>
          </BoardsMenu>
        </InnerSidebarWrapper>
        <BtnsWrapper>
          <ThemePicker />
          <HideBtn
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          >
            <ImEyeBlocked />
            Hide Sidebar
          </HideBtn>
        </BtnsWrapper>
      </StyledSidebar>
      <ShowHideBtn
        onClick={() => dispatch(toggleSidebar())}
        sidebarState={sidebarState}
      >
        <ImEye />
      </ShowHideBtn>
    </SidebarWrapper>
  );
};

export default Sidebar;
