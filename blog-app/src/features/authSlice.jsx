import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import storage from "redux-persist/lib/storage/session"; // using session storage

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    id: null,
    email: "",
    first_name: "",
    last_name: "",
    loading: false,
    error: false,
    image: "",
    token: null,
  },

  reducers: {
    // auth/fetchstart
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // auth/loginSuccess
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.id = payload?.user?.id;
      state.email = payload?.user?.email;
      state.first_name = payload?.user?.first_name;
      state.last_name = payload?.user?.last_name;
      state.image = payload?.user?.image;
      state.token = payload?.key;
    },
    // auth/logoutSuccess
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
    },
    // auth/registerSuccess
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
    },
    // auth/fetchFail
    fetchFail: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

const persistConfig = {
  key: "auth",
  storage,
};

// persist: israr etmek, surdurmek

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;

export default persistedAuthReducer;
