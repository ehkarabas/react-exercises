import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import storage from "redux-persist/lib/storage/session"; // using session storage

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },

  reducers: {
    // theme/toggleTheme
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

const persistConfig = {
  key: "theme",
  storage,
};

// persist: israr etmek, surdurmek

const persistedThemeReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { toggleTheme } = themeSlice.actions;
export default persistedThemeReducer;
