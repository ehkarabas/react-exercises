import AppStyle from "./app.module.scss";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className={AppStyle.App}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
