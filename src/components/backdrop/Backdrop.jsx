import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  opacity: 0.75;
  cursor: pointer;
`;

const Backdrop = ({ onClick }) => {
  return <Wrapper onClick={onClick} />;
};

export default Backdrop;
