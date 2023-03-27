import Reacts from "react";
import { AddBoard, StyledMobileMenu } from "./MobileMenu.styles";
import { TbLayoutBoardSplit } from "react-icons/tb";
import ThemePicker from "../themePicker/ThemePicker";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddNewBoard, toggleBoardMenu } from "../../reducers/modalsSlice";
import MenuItem from "./menuItem/MenuItem";

const MobileMenu = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const taskBoards = useSelector((state) => state.taskBoards);
  const dispatch = useDispatch();

  const handleAddNewBoard = () => {
    dispatch(toggleBoardMenu());
    dispatch(toggleAddNewBoard());
  };

  return (
    <>
      <StyledMobileMenu isDarkTheme={isDarkTheme}>
        <h4>ALL BOARDS ({taskBoards.length})</h4>
        {taskBoards?.map(({ id, title }) => (
          <MenuItem title={title} key={id} id={id} />
        ))}
        <AddBoard onClick={handleAddNewBoard}>
          <TbLayoutBoardSplit />+ Create New Board
        </AddBoard>
        <ThemePicker />
      </StyledMobileMenu>
    </>
  );
};

export default MobileMenu;
