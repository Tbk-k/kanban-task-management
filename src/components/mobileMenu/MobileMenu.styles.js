import styled from "styled-components";

export const StyledMobileMenu = styled.menu`
  border-radius: 8px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 0;
  list-style: none;
  min-width: 265px;
  h4 {
    font: ${({ theme }) => theme.fonts.heading.s};
    letter-spacing: 2.4px;
    color: ${({ theme }) => theme.colors.mediumGrey};
    margin: 0;
    text-align: start;
    margin: 0 0 30px 24px;
  }
`;

export const AddBoard = styled.button`
  padding: 15px 0px 15px 25px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purple};
  align-items: center;
  display: flex;
  gap: 12px;
  font: ${({ theme }) => theme.fonts.heading.m};
  cursor: pointer;
  margin-bottom: 20px;
  svg {
    font-size: 22px;
  }
`;
