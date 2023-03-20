import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0, // ? Global state
};

// ! Reducer bir pure JS function'dir, yani herhangi bir yan etkiden etkilenmeyen, disa bagimli olmayan JS function'idir. Yani bir Reducer function'a girilen bir argumandan dondurulen deger daima ayni olmalidir(predictable). Fetch, dosya yazma okuma islemleri, store state'i disinda bir state icermek ornek olarak verilebilecek disa bagimliliklardir.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case RESET:
      return initialState;
    default:
      // ! Reducer aslinda bir state makinesidir, dolayisiyla state dondurmesi beklenir, bu nedenle switch-case default kisminda state'i dondurmek best-practice'tir.
      console.log(`Undefined type: ${action.type}`);
      return state;
  }
};

export default counterReducer;
