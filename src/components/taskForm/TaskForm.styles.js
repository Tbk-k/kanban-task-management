import styled, { css } from "styled-components";

const StyledInput = css`
  width: 100%;
  padding: 8px 16px;
  font: ${({ theme }) => theme.fonts.body.l};
  border: 1px solid black;
  border-color: rgba(130, 143, 163, 0.25);
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  cursor: pointer;
  background-color: inherit;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.white : theme.colors.black};
  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.mediumGrey};
    font-weight: normal;
  }
`;

export const AddTaskForm = styled.form`
  width: 90%;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  padding: 24px;
  h4 {
    font: ${({ theme }) => theme.fonts.heading.l};
    color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.white : theme.colors.black};
    margin: 0;
  }
  label {
    display: block;
    font: ${({ theme }) => theme.fonts.heading.s};
    color: ${({ theme }) => theme.colors.mediumGrey};
    margin-bottom: 8px;
    margin-top: 24px;
  }
  input {
    ${StyledInput}
  }

  textarea {
    ${StyledInput}
    min-height: 120px;
  }
`;

export const AddSubtaskBtn = styled.button`
  width: 100%;
  margin-top: 15px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  font: ${({ theme }) => theme.fonts.body.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple};
  padding: 10px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.white : theme.colors.lightGrey};
`;

export const SubtaskWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  input {
    ${StyledInput}
  }
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.mediumGrey};
    cursor: pointer;
  }
`;

export const StatusSelect = styled.select`
  ${StyledInput}
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.white : theme.colors.black};
`;

export const CreateTask = styled(AddSubtaskBtn)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s;
  margin-top: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purpleHover};
  }
`;
