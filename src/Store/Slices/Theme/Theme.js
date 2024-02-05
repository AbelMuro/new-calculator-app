import { createSlice } from "@reduxjs/toolkit";

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {          //there are three themes, each theme is represented by a number between 1 and 3
    theme: darkTheme ? 3 : 2
};              

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        UPDATE_THEME(state) {
            if(state.theme <= 2)
                state.theme++;
            else
                state.theme = 1;
        }
    }
})

export const {UPDATE_THEME} = themeSlice.actions;
export default themeSlice.reducer;