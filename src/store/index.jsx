import { configureStore } from '@reduxjs/toolkit'
import isEnglishSlice from './slices/isEnglish.slice'
import isDarkModeSlice from './slices/isDarkMode.slice'

export default configureStore({
    reducer: {
      isEnglish: isEnglishSlice,
      isDarkMode: isDarkModeSlice
    }
})
