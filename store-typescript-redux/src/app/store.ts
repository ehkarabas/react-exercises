import { configureStore } from "@reduxjs/toolkit";
import { persistedProductsReducer } from "../features/productsSlice";

// Redux Toolkit Setup Step 1
// URL https://redux-toolkit.js.org/tutorials/typescript#project-setup
// URL https://redux-toolkit.js.org/tutorials/typescript#define-root-state-and-dispatch-types

// ? A non-serializable value was detected in an action, in the path: `register`. Value: ƒ register(key) {_pStore.dispatch({type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,key: key});}  Take a look at the logic that dispatched this action:  ... Hatasi icin asagidaki import eklemeleri ve configureStore'da middleware eklemesi yapilmalidir.

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

export const store = configureStore({
  reducer: {
    products: persistedProductsReducer,
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
