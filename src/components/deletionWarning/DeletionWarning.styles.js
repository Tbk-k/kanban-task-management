import styled from "styled-components";

export const WarningWrapper = styled.div`
  width: 90%;
  max-width: 480px;
  border-radius: 6px;
  padding: 32px;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.darkGrey : theme.colors.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h5 {
    font: ${({ theme }) => theme.fonts.heading.l};
    color: ${({ theme }) => theme.colors.red};
    margin: 0;
  }
  p {
    font: ${({ theme }) => theme.fonts.body.l};
    color: ${({ theme }) => theme.colors.mediumGrey};
    margin-top: 24px;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  button {
    width: 100%;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font: ${({ theme }) => theme.fonts.heading.s};
    font-size: 13px;
    line-height: 23px;
    padding: 10px 0;
    transition: background-color 0.3s;
    &:first-of-type {
      background-color: ${({ theme }) => theme.colors.red};
      color: white;
      &:hover {
        background-color: ${({ theme }) => theme.colors.redHover};
      }
    }
    &:last-of-type {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
