import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkLightContextProvider } from "./context/darkLightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkLightContextProvider value={"day"}>
    <App />
  </DarkLightContextProvider>
);
