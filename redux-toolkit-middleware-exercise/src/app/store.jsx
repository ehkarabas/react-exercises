import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import newsSlice from "../features/newsSlice";

// ! configureStore methodu hem bir store olusturur hem de olustururken farkli reducer'lari birlestirir.

const store = configureStore({
  reducer: {
    auth: authSlice,
    news: newsSlice,
  },
  devTools: process.env.NODE_ENV !== "production", // DevTools'u build'te gizlemek icin kullanilan degisken
});

export default store;
