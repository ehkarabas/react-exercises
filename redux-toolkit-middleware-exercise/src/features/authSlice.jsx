import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

// ! rxslice ile hizlica slice yapisi kurulabilir.

const authSlice = createSlice({
  name: "auth",
  initialState, // ES6 object literal -> key ile value ayni ise ayrica belirtmeye gerek yok
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
