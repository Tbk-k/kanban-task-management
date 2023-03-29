import styled from "styled-components";

export const StyledSubtaskSummary = styled.div`
  margin-top: 8px;
  p {
    font: ${({ theme }) => theme.fonts.body.m};
    margin: 0;
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;
