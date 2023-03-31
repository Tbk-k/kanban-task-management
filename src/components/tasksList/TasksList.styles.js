import styled from "styled-components";

export const TaskListWrapper = styled.div`
  display: flex;
  justify-content: ${({ isEmptyBoard }) => isEmptyBoard && "center"};
  align-items: ${({ isEmptyBoard }) => isEmptyBoard && "center"};
  gap: ${({ isEmptyBoard }) => !isEmptyBoard && "24px"};
  padding: ${({ isEmptyBoard }) => !isEmptyBoard && "24px 0 0 28px"};
  height: 100%;
  min-height: 100vh;
  overflow-x: scroll;
`;

export const StyledEmptyMessage = styled.div`
  text-align: center;
  width: 85%;
  margin: 0 auto;
  h3 {
    font: ${({ theme }) => theme.fonts.heading.l};
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
  button {
    font: ${({ theme }) => theme.fonts.heading.m};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple};
    border: none;
    border-radius: 24px;
    margin-top: 20px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.purpleHover};
    }
  }
`;

export const AddNewColumnBtn = styled.button`
  height: calc(100vh - 145px);
  font: ${({ theme }) => theme.fonts.heading.l};
  min-width: 200px;
  border-radius: 6px;
  margin-top: 43px;
  margin-right: 24px;
  border: none;
  color: ${({ theme }) => theme.colors.mediumGrey};
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.lightLines};
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;
