import React from "react";
import ReactDOM from "react-dom/client";
// import "flowbite/dist/flowbite.css"; // calismayan component olursa burada
import "./index.css";
import App from "./App";
import "tw-elements";
import "flowbite/dist/flowbite.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
