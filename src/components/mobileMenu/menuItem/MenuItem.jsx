import React from "react";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeActiveBoard } from "../../../reducers/activeBoard";
import { resetModals } from "../../../reducers/modalsSlice";

export const StyledItem = styled.li`
  padding: 15px 0px 15px 25px;
  min-width: 250px;
  border-radius: 0 100px 100px 0;
  font: ${({ theme }) => theme.fonts.heading.m};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin-right: 24px;
  svg {
    font-size: 22px;
  }
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.purple};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MenuItem = ({ title, id }) => {
  const activeID = useSelector((state) => state.activeBoard.id);
  const boards = useSelector((state) => state.taskBoards);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { id } = e.target;
    dispatch(changeActiveBoard(boards[id]));
    dispatch(resetModals());
  };
  return (
    <StyledItem
      id={id}
      className={id === activeID && "active"}
      onClick={handleClick}
    >
      <TbLayoutBoardSplit />
      {title}
    </StyledItem>
  );
};

export default MenuItem;
