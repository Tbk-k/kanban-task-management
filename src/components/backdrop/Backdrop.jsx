import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetModals } from "../../reducers/modalsSlice";
import {
  setPreviousBoard,
  setPreviousTask,
} from "../../reducers/previousSlice";

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

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper
      onClick={() => {
        dispatch(resetModals());
        dispatch(setPreviousTask({ columnId: null, taskId: null }));
        dispatch(setPreviousBoard({ bordId: null }));
      }}
    />
  );
};

export default Backdrop;
