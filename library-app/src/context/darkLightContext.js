import { createContext, useState } from "react";

const DarkLightContext = createContext();
const { Provider } = DarkLightContext;

const DarkLightContextProvider = (props) => {
  // console.log(props); // {propNameSentFromIndexJS: propVal, children: {…}}
  const [darkLight, setDarkLight] = useState("day");
  const toggleDarkLight = () => {
    setDarkLight(() => {
      return darkLight === "day" ? "night" : "day";
    });
  };
  return (
    <Provider value={{ darkLight, toggleDarkLight }}>{props.children}</Provider>
  );
};

export { DarkLightContextProvider, DarkLightContext };
