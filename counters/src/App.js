import Counter from "./components/classComponent/Counter";
import UseStateCounter from "./components/useStateHook/UseStateCounter";
import UseStateObject from "./components/useStateHook/UseStateObject";

function App() {
  return (
    <div>
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}
export default App;
