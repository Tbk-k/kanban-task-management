import React from "react";
import { Wrapper } from "./ThemePicker.styles";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../reducers/themeSlice";

const ThemePicker = () => {
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(setTheme());
  };
  return (
    <Wrapper isDarkTheme={isDarkTheme}>
      <div>
        <BsFillSunFill />
        <button onClick={handleThemeChange} />
        <BsFillMoonStarsFill />
      </div>
    </Wrapper>
  );
};

export default ThemePicker;
