import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "flowbite/dist/flowbite.css"; // calismayan component olursa burada import edilebilir
import "./index.css";
import "tw-elements";
import "flowbite/dist/flowbite.js";
//! index'e de eklenmeli -> <script src="./node_modules/flowbite/dist/flowbite.js"></script>

// + Flowbite Import Function In Case Lines Above To Import flowbite.js Doesnt Work
// const importFlowbiteFunc = function (flowbitePathStr) {
//   const flowbiteScriptEl = document.createElement("script");
//   flowbiteScriptEl.setAttribute("src", flowbitePathStr);
//   document.body.appendChild(flowbiteScriptEl);
// };
// importFlowbiteFunc("./node_modules/flowbite/dist/flowbite.js"); // here goes your path to a local flowbite.js you want to import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
