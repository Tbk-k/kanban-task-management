import styled from "styled-components";

export const StyledTaskItem = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  margin-top: 24px;
  padding: 23px 16px;
  cursor: pointer;
  position: relative;
  h5 {
    margin: 0;
    font: ${({ theme }) => theme.fonts.heading.m};
    color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.white : theme.colors.black};
    transition: color 0.3s;
  }
  &:hover {
    h5 {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: inherit;
    cursor: pointer;
  }
`;
