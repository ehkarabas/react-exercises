// import { createStore } from "redux";
// import { counterReducer } from "../reducers/counterReducers";

// * Redux'taki tüm state, store'da saklanır. View, buradan sadece veri alabilir. Redux uygulamasında sadece bir store kullanılabilir. Bu, Flux tasarım deseninden ana farktır, çünkü Flux'ta birden fazla store'a sahip olunabilir.

// * Store projeye createStore method'u ile eklenir ve parametresi olan reducer'la bir store olusturulur. . Daha önce belirtildiği gibi, Redux sadece React için değildir, bu yüzden kütüphane adi react-redux'tir ve  bunları bir arada tutmak için store'la birlikte bize bir provider component'i sağlar. Provider component, App component'i ve içindeki tüm component'lerin store'la etkilesimde olabilmesi için App component'ini wrap'ler.

// export const store = createStore(counterReducer);
