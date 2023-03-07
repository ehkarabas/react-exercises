import { createContext, useState } from "react";

const LoginContext = createContext();
const { Provider, Consumer } = LoginContext;

const LoginContextProvider = (props) => {
  const [login, setLogin] = useState(
    JSON.parse(sessionStorage.getItem("login")) || false
  );
  return <Provider value={{ login, setLogin }}>{props.children}</Provider>;
};

export { LoginContextProvider, Consumer as LoginContextConsumer, LoginContext };
