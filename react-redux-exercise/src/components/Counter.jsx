import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementBy,
} from "../redux/reducers/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterToolkit);

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(incrementBy(5));
  };

  return (
    <main className="my-20 mx-auto">
      <h2 className="text-[2rem]">Redux Toolkit Counter</h2>
      <div className="border-4 border-solid border-cyan-400 my-0 mx-3 p-2 rounded-xl bg-sky-200 shadow-lg">
        <h1
          className="text-5xl pt-3"
          style={{
            color: counter > 0 ? "green" : counter === 0 ? "grey" : "red",
          }}
        >
          {counter}
        </h1>
        <div className="mt-2">
          <button className="bg-red-600" onClick={decrementHandler}>
            -
          </button>
          <button className="bg-success-400" onClick={increaseHandler}>
            +5
          </button>
          <button className="bg-success-600" onClick={incrementHandler}>
            +
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
