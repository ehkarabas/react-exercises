import { createContext, useState } from "react";

// const ThemeContext = createContext();
// export default ThemeContext;

const ThemeContext = createContext();
const { Provider, Consumer } = ThemeContext;

const ThemeContextProvider = (props) => {
  // console.log(props); // {propNameSentFromIndexJS: propVal, children: {…}}
  const [theme, setTheme] = useState("day");
  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === "day" ? "night" : "day";
    });
  };
  return <Provider value={{ theme, toggleTheme }}>{props.children}</Provider>;
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer, ThemeContext };
