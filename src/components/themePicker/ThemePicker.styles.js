import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 12px;
  div {
    width: 100%;
    padding: 14px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 6px;
    background-color: ${({ theme, isDarkTheme }) =>
      isDarkTheme ? theme.colors.veryDarkGrey : theme.colors.lightGrey};
    svg {
      color: ${({ theme }) => theme.colors.mediumGrey};
      font-size: 19px;
    }
    button {
      width: 40px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.purple};
      border-radius: 12px;
      padding: 0;
      position: relative;
      cursor: pointer;
      border: none;
      &::after {
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.white};
        top: 3px;
        left: 3px;
        transition: transform 0.3s;
        transform: ${({ isDarkTheme }) => isDarkTheme && `translateX(20px)`};
      }
    }
  }
`;
