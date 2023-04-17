import { createSlice } from '@reduxjs/toolkit';

export const isEnglishSlice = createSlice({
    name: 'isEnglish',
    initialState: false,
    reducers: {
      setIsEnglish: (state, action) => {
        const isEnglish = action.payload;
        return isEnglish;
      }
    }
})

export const { setIsEnglish } = isEnglishSlice.actions;

export default isEnglishSlice.reducer;
