import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/taskList/TaskList";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.colors.veryDarkGrey : theme.colors.lightGrey};
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);

  return (
    <Wrapper isDarkTheme={isDarkTheme}>
      <Navbar />
      <InnerWrapper>
        <TaskList />
      </InnerWrapper>
    </Wrapper>
  );
};

export default App;
