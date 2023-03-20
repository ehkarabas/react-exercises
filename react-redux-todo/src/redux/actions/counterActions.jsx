import { DECREASE, INCREASE, RESET } from "../types/counterTypes";

// dispatch({ type: "INCREASE" }) icin action donduren kisaltilmis yazim sunan function
// dispatch(inc())
export const inc = () => {
  return { type: INCREASE };
};

// dispatch({ type: "INCREASE" }) icin action donduren kisaltilmis yazim sunan function
// dispatch(dec())
export const dec = () => ({ type: DECREASE });

// dispatch({ type: "INCREASE" }) icin action donduren kisaltilmis yazim sunan function
// dispatch(reset())
export const reset = () => ({ type: RESET });
