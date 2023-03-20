import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
// * redux gelistiricileri, createStore kullanimindan ziyade toolkit ile configureStore'u kullanmaya yonlendirmektedir.
// ! klasor icindeki index.js/jsx import ediliyorsa, import path'inde index.js/jsx'in belirtilmesine gerek yoktur, React bunu otomatik olarak algilayabilmektedir.
import { store } from "./redux";

// Store olusturuldu
// const store = createStore(reducer);

function App() {
  return (
    <div className="app">
      {/* Provider ile combined store wrap'lenen child'lara dagitildi */}
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
