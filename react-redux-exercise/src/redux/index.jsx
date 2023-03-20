import { combineReducers, createStore } from "redux";
import counterSlice from "./reducers/counterSlice";
import { counterReducer } from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counterRegular: counterReducer,
  counterToolkit: counterSlice,
});

export const store = createStore(rootReducer);
