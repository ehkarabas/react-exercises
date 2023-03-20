import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import { decrease, increase, reset } from "./redux/actions/counterActions";

export default function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterRegular);

  return (
    <div className="App container mx-auto font-firacode text-center">
      <>
        <h1 className="text-[3rem] text-black">
          Cool<span className="text-cyan-400">Dev</span>
        </h1>
        <h2 className="text-[2rem]">Redux Counter</h2>
        <div className="border-4 border-solid border-cyan-400 my-0 mx-3 p-2 rounded-xl bg-sky-200 shadow-lg">
          <h1
            className="text-5xl pt-3"
            style={{
              color: counter > 0 ? "green" : counter === 0 ? "grey" : "red",
            }}
          >
            {counter}
          </h1>
          <button className="bg-red-600" onClick={() => dispatch(decrease(1))}>
            -
          </button>
          <button className="bg-gray-600" onClick={() => dispatch(reset())}>
            0
          </button>
          <button
            className="bg-success-600"
            onClick={() => dispatch(increase(1))}
          >
            +
          </button>
        </div>
      </>

      <Counter />
    </div>
  );
}
