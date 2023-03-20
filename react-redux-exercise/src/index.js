import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements";
import "flowbite/dist/flowbite.js";
import { Provider } from "react-redux";
import { store } from "./redux";

// * Redux'taki tüm state, store'da saklanır. View, buradan sadece veri alabilir. Redux uygulamasında sadece bir store kullanılabilir. Bu, Flux tasarım deseninden ana farktır, çünkü Flux'ta birden fazla store'a sahip olunabilir.

// * Store projeye createStore method'u ile eklenir ve parametresi olan reducer'la bir store olusturulur. . Daha önce belirtildiği gibi, Redux sadece React için değildir, bu yüzden kütüphane adi react-redux'tir ve  bunları bir arada tutmak için store'la birlikte bize bir provider component'i sağlar. Provider component, App component'i ve içindeki tüm component'lerin store'la etkilesimde olabilmesi için App component'ini wrap'ler.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);
