import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDarkTheme: true };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

const { actions, reducer } = themeSlice;
export const { setTheme } = actions;
export default reducer;
