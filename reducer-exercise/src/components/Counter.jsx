import React from "react";
import { COUNT_ACTIONS } from "../App";

const Counter = ({
  decrement,
  increment,
  count,
  stateCount,
  dispatchCount,
}) => {
  return (
    <>
      <h2 className="text-black dark:text-white capitalize text-center font-bold">
        countert with reducer
      </h2>

      <div className="uppercase text-center p-5 text-2xl font-bold flex items-center justify-center gap-4">
        <button
          className="btn-decrement"
          // onClick={decrement}
          onClick={() => {
            dispatchCount({ type: COUNT_ACTIONS.DECREMENT });
          }}
          // disabled={count === 0 && true}
          disabled={stateCount.count === 0 && true}
        >
          -
        </button>
        {/* <span className="text-black dark:text-white">{count}</span> */}
        <span className="text-black dark:text-white">{stateCount.count}</span>
        <button
          className="btn-increment"
          // onClick={increment}
          onClick={() => {
            dispatchCount({ type: COUNT_ACTIONS.INCREMENT });
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
