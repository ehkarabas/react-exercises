import { configureStore } from "@reduxjs/toolkit";
import persistedAuthReducer from "../features/authSlice";
import persistedThemeReducer from "../features/themeSlice";
import blogReducer from "../features/blogSlice";

// import { persistStore, persistReducer } from "redux-persist";
// ? A non-serializable value was detected in an action, in the path: `register`. Value: ƒ register(key) {_pStore.dispatch({type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,key: key});}  Take a look at the logic that dispatched this action:  ... Hatasi icin asagidaki import eklemeleri ve configureStore'da middleware eklemesi yapilmalidir.
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import storage from "redux-persist/lib/storage/session"; // using session storage

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    theme: persistedThemeReducer,
    blog: blogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
