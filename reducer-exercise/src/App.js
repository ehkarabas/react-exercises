import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Toaster } from "react-hot-toast";
import AddToDo from "./components/apiTodos/AddToDo";
import Counter from "./components/Counter";
import Switch from "./components/theme/Switch";
import ToDos from "./components/apiTodos/ToDos";
import { toastErrorNotify, toastSuccessNotify } from "./helper/ToastNotify";
import ToDosWithApi from "./components/apiTodos/ToDosWithApi";
import AddToDoReducer from "./components/reducerTodos/AddToDoReducer";
import ToDosWithReducer from "./components/reducerTodos/ToDosWithReducer";

// ? to prevent misspell action types, store action names in an object to autocomplete
export const COUNT_ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

export const TODO_ACTIONS = {
  ADD_TODO: "add-to-do",
  TOGGLE_TODO: "toggle-to-do",
  DEL_TODO: "del-to-do",
  EDIT_TODO: "edit-to-do",
};

function App() {
  // - traditional state definition
  const [count, setCount] = useState(0);

  // + complex state definition via useReducer
  const [stateCount, dispatchCount] = useReducer(reducerCount, { count: 0 });

  // + complex state definition via useReducer
  const [stateToDo, dispatchToDo] = useReducer(
    reducerToDo,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [toDo, setToDo] = useState("");

  // - state management with multiple handlers
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  // + state management with reducer for multiple handlers
  function reducerCount(currentState, action) {
    switch (action.type) {
      case COUNT_ACTIONS.INCREMENT:
        return { count: currentState.count + 1 };

      case COUNT_ACTIONS.DECREMENT:
        return { count: currentState.count - 1 };

      default:
        // throw new Error(`Unknow action type: ${action.type}`)
        console.log(`Unknow action type: ${action.type}`);
        return currentState;
    }
  }

  // + state management with reducer for multiple handlers
  function reducerToDo(currentState, action) {
    switch (action.type) {
      case TODO_ACTIONS.ADD_TODO:
        return [
          ...currentState,
          {
            id: Date.now(),
            name: action.payload,
            date: new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            }),
            complete: false,
          },
        ];

      case TODO_ACTIONS.TOGGLE_TODO:
        return currentState.map((todo, index) => {
          if (todo.id === action.payload) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });

      case TODO_ACTIONS.DEL_TODO:
        return currentState.filter((todo, index) => todo.id !== action.payload);

      case TODO_ACTIONS.EDIT_TODO:
        return currentState.map((todo, index) => {
          if (todo.id === action.payload.id) {
            return {
              id: action.payload.id,
              name: action.payload.task,
              date: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              }),
              complete: action.payload.isDone,
            };
          }
          return todo;
        });

      default:
        // throw new Error(`Unknow action type: ${action.type}`)
        console.log(`Unknow action type: ${action.type}`);
        return currentState;
    }
  }

  function handleAddToDoSubmit(e) {
    e.preventDefault();
    dispatchToDo({ type: TODO_ACTIONS.ADD_TODO, payload: toDo });
    setToDo("");
    toastSuccessNotify("To-do succesfully added.");
    document.getElementById("addReducerModalCloseButton").click();
  }

  function handleEditToDoSubmit(e, newToDo) {
    e.preventDefault();
    dispatchToDo({ type: TODO_ACTIONS.EDIT_TODO, payload: newToDo });
    toastSuccessNotify("To-do succesfully edited.");
    document.getElementById("editReducerModalCloseButton").click();
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(stateToDo));
    console.log(stateToDo);
  }, [stateToDo]);

  // console.log(stateToDo);

  useEffect(() => {
    console.log(stateCount);
  }, [stateCount]);

  return (
    <div className="App py-4">
      <Counter
        decrement={decrement}
        increment={increment}
        count={count}
        stateCount={stateCount}
        dispatchCount={dispatchCount}
        COUNT_ACTIONS={COUNT_ACTIONS}
      />

      <hr className="h-[2px] bg-red-600 dark:bg-teal-400 border-none min-w-[248px] w-[75%] mx-auto my-2" />

      <ToDosWithReducer
        toDo={toDo}
        setToDo={setToDo}
        stateToDo={stateToDo}
        dispatchToDo={dispatchToDo}
        handleAddToDoSubmit={handleAddToDoSubmit}
        handleEditToDoSubmit={handleEditToDoSubmit}
      />

      <hr className="h-[2px] bg-red-600 dark:bg-teal-400 border-none min-w-[248px] w-[75%] mx-auto my-4" />

      <ToDosWithApi />

      <Switch />

      <Toaster />
    </div>
  );
}

export default App;
