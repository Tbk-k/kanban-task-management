import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    &:first-of-type {
      svg {
        height: 25px;
      }
      h2 {
        margin: 0;
        font: ${({ theme }) => theme.fonts.heading.l};
        cursor: pointer;
        display: flex;
        gap: 8px;
        color: ${({ theme, isDarkTheme }) =>
          isDarkTheme ? theme.colors.white : theme.colors.black};

        svg {
          font-size: 10px;
          color: ${({ theme }) => theme.colors.purple};
        }
      }
    }

    &:last-of-type {
      button {
        width: 48px;
        height: 32px;
        border-radius: 24px;
        border: none;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.purple};
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          fill: white;
          font-size: 18px;
        }
      }
      svg {
        color: ${({ theme }) => theme.colors.mediumGrey};
        font-size: 22px;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: ${({ theme, isDarkTheme }) =>
            isDarkTheme ? theme.colors.white : theme.colors.darkGrey};
        }
      }
    }
  }
`;
