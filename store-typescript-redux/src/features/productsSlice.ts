import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../models/models";
// import type { RootState } from "../app/store";

import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import storage from "redux-persist/lib/storage/session"; // using session storage

// Redux Toolkit Setup Step 3
// URL https://redux-toolkit.js.org/tutorials/typescript#application-usage
// URL https://redux-toolkit.js.org/tutorials/typescript#define-slice-state-and-action-types

// + URL https://app.quicktype.io/ ile API'den donen JSON responsu'nu girdigimizde hazir sekilde bu response'teki data type'lara gore interface olusturulabilir.

// Define a type for the slice state
interface ProductsState {
  loading: boolean;
  error: boolean;
  favorites: Product[];
  productsList: Product[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  loading: false,
  error: false,
  favorites: [],
  productsList: [],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = false;
    },
    getSuccessProduct(state, action: PayloadAction<Product[]>) {
      state.loading = false;
      state.error = false;
      state.productsList = action.payload;
    },
    addFavorites(state, action: PayloadAction<Product>) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorites(state, action: PayloadAction<Product[]>) {
      state.favorites = action.payload;
    },
    fetchFail(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

const persistConfig = {
  key: "products",
  storage,
};

export const {
  fetchStart,
  getSuccessProduct,
  addFavorites,
  removeFavorites,
  fetchFail,
} = productsSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// export const productsReducer = productsSlice.reducer;

export const persistedProductsReducer = persistReducer(
  persistConfig,
  productsSlice.reducer
);
