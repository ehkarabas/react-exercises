import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements";
import "../node_modules/flowbite/dist/flowbite";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
