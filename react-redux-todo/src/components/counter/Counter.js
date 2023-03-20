import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../../redux/actions/counterActions";
import "./Counter.css";

const Counter = () => {
  // ? Store'daki dispatch'e useDispatch hooku ile erisilir.
  const dispatch = useDispatch();
  // ? Store'daki combined state'e useSelector hooku ile erisilir.
  // - combineReducers()'ta key atamasi yapilmadan kullanilirsa;
  // const counter = useSelector((state) => state.counterReducer.counter);

  // const counter = useSelector((state) => state.count.counter);
  const { counter } = useSelector((state) => state.count);

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => {
            // dispatch({ type: "INCREASE" });
            dispatch(inc());
          }}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => {
            // dispatch({ type: "RESET" });
            dispatch(reset());
          }}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => {
            // dispatch({ type: "DECREASE" });
            dispatch(dec());
          }}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
