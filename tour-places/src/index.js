import React from "react";
import ReactDOM from "react-dom/client";
import IndexStyle from "./scss/index.module.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
