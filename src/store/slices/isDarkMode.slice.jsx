import { createSlice } from '@reduxjs/toolkit';

export const isDarkModeSlice = createSlice({
    name: 'isDarkMode',
    initialState: true,
    reducers: {
      setIsDarkMode: (state, action) => {
        const isDarkMode = action.payload;
        return isDarkMode;
      }
    }
})

export const { setIsDarkMode } = isDarkModeSlice.actions;

export default isDarkModeSlice.reducer;
