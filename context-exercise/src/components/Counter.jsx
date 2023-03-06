import { useContext, useReducer } from "react";
import { ThemeContext } from "../context/themeContext";

const Counter = () => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <p style={{ color: theme === "night" ? "red" : "inherit" }}>{sum}</p>
      <button
        onClick={() => dispatch(1)}
        style={{ color: theme === "night" ? "red" : "inherit" }}
      >
        Add 1
      </button>
    </>
  );
};

export default Counter;
