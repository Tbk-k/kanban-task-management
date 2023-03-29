import styled from "styled-components";

export const StyledTasksColumn = styled.div`
  width: 280px;
  flex-shrink: 0;
  height: 100%;
  min-height: 100vh;
  h4 {
    margin: 0;
    font: ${({ theme }) => theme.fonts.heading.m};
    color: ${({ theme }) => theme.colors.mediumGrey};
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      width: 12px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #49c4e5;
      top: 50%;
    }
  }
`;
