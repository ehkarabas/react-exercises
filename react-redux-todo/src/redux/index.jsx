// const initialState = {
//   counter: 0, // ? Global state
// };

// // ! Reducer bir pure JS function'dir, yani herhangi bir yan etkiden etkilenmeyen JS function'idir baska bir deyisle de dependency'lere bagli olarak calismayan/degismeyen JS function'lardir.
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREASE":
//       return { ...state, counter: state.counter - 1 };
//     case "RESET":
//       return initialState;
//     default:
//       // ! Reducer aslinda bir state makinesidir, dolayisiyla state dondurmesi beklenir, bu nedenle switch-case default kisminda state'i dondurmek best-practice'tir.
//       console.log(`Undefined type: ${action.type}`);
//       return state;
//   }
// };

// export default reducer;

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

// Birden fazla reducer iceren Store olusturuldu
export const store = createStore(rootReducer);
