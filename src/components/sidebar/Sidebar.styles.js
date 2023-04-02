import styled from "styled-components";
import { StyledItem } from "../mobileMenu/menuItem/MenuItem";

export const SidebarWrapper = styled.div`
  height: 100vh;
  align-items: flex-end;
  position: relative;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledSidebar = styled.nav`
  flex-shrink: 0;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  height: 100%;
  border-right: ${({ theme }) => `1px solid ${theme.colors.darkLines}`};
  border-color: ${({ theme, isDarkTheme }) =>
    !isDarkTheme && theme.colors.lightLines};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${({ sidebarState }) => (sidebarState ? "500px" : "0px")};
  overflow: hidden;
  transition: max-width 0.3s;
  position: relative;
  z-index: 10;
`;

export const LogoWrapper = styled.div`
  height: 72px;
  display: flex;
  justify-content: flex-start;
  padding: 25px;
  align-items: center;
`;

export const InnerSidebarWrapper = styled.div``;
export const BoardsMenu = styled.menu`
  h5 {
    font: ${({ theme }) => theme.fonts.heading.s};
    letter-spacing: 2.4px;
    color: ${({ theme }) => theme.colors.mediumGrey};
    padding-left: 25px;
  }
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ShowHideBtn = styled.button`
  position: absolute;
  right: -65px;
  bottom: 40px;
  width: 65px;
  height: 58px;
  border: none;
  border-radius: 0 50% 50% 0;
  background-color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  z-index: 1;
  transform: ${({ sidebarState }) =>
    sidebarState ? "translateX(-66px)" : "translateX(0)"};
  z-index: 1;
  transition: transform 0.3s 0.1s, background-color 0.3s;
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    transform: translateX(-4px);
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.purpleHover};
  }
`;

export const BtnsWrapper = styled.div`
  width: 100%;
`;

export const HideBtn = styled(StyledItem)`
  margin: 8px 24px 32px 0;
`;
