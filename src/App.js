import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import TaskList from "./components/tasksList/TasksList";
import { changeActiveBoard } from "./reducers/activeBoard";

const Wrapper = styled.main`
  max-width: 100vw;
  height: 100vh;
  display: flex;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.veryDarkGrey : theme.colors.lightGrey};
`;

const App = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.taskBoards);
  const activeBoard = useSelector((state) => state.activeBoard);
  const [isEmptyBoard, setIsEmptyBoard] = useState(true);

  useEffect(() => {
    const { id } = activeBoard;
    if (!id) {
      dispatch(changeActiveBoard(boards[0]));
    } else {
      dispatch(changeActiveBoard(boards[id]));
    }
  }, [dispatch, boards]);

  useEffect(() => {
    if (!activeBoard.columns) return;
    setIsEmptyBoard(activeBoard.columns.length === 0);
  }, [activeBoard]);

  return (
    <Wrapper isDarkTheme={isDarkTheme}>
      <Sidebar />
      <InnerWrapper isDarkTheme={isDarkTheme}>
        <Navbar isEmptyBoard={isEmptyBoard} />
        <TaskList isEmptyBoard={isEmptyBoard} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default App;
