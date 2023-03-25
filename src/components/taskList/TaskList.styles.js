import styled from "styled-components";

export const TaskListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
