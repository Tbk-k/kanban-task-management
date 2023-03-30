import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const TaskPreviewWrapper = styled.div`
  width: 90%;
  max-width: 480px;
  min-height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  padding: 24px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    position: relative;
    h4 {
      font: ${({ theme }) => theme.fonts.heading.l};
      color: ${({ theme, isDarkTheme }) =>
        isDarkTheme ? theme.colors.white : theme.colors.black};
      margin: 0;
    }
    svg {
      color: ${({ theme }) => theme.colors.mediumGrey};
      font-size: 22px;
      cursor: pointer;
      transition: color 0.3s;
      flex-shrink: 0;
      &:hover {
        color: ${({ theme, isDarkTheme }) =>
          isDarkTheme ? theme.colors.white : theme.colors.darkGrey};
      }
    }
  }
  p {
    margin: 26px 0;
    font: ${({ theme }) => theme.fonts.body.l};
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;

export const SubtaskLabel = styled.label`
  width: 100%;
  display: block;
  padding: 16px 8px;
  border-radius: 4px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.veryDarkGrey : theme.colors.lightGrey};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  input {
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
    border: 1px solid rgba(130, 143, 163, 0.248914);
    border-radius: 2px;
    position: relative;
    transition: background-color 0.3s;
    flex-shrink: 0;
    &:checked {
      background-color: ${({ theme }) => theme.colors.purple};
      &::before {
        content: "\\2713";
        color: ${({ theme }) => theme.colors.white};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  h5 {
    font: ${({ theme }) => theme.fonts.heading.s};
    margin: 0;
    color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.white : theme.colors.black};
    opacity: ${({ checked }) => checked && 0.5};
    text-decoration: ${({ checked }) => checked && "line-through"};
  }
`;


