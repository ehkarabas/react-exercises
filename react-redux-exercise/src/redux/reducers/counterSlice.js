import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
      console.log({ counterToolkit: state.counter });
    },
    decrement(state) {
      state.counter--;
      console.log({ counterToolkit: state.counter });
    },
    incrementBy(state, action) {
      state.counter = state.counter + action.payload;
      console.log({ counterToolkit: state.counter });
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
