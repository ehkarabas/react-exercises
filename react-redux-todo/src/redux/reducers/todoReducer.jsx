import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
};

// ? rxreducer ile hizlica initial state'i ile birlikte switch-case iceren reducer function olusturulabilir.
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const todos = localStorage.getItem("todoList") || [];
      localStorage.setItem(
        "todoList",
        JSON.stringify([
          ...state.todoList,
          { id: Date.now(), text: payload, completed: false },
        ])
      );
      return {
        todoList: [
          ...state.todoList,
          { id: Date.now(), text: payload, completed: false },
        ],
      };

    case CLEAR_TODO:
      localStorage.setItem("todoList", JSON.stringify([]));
      return {
        todoList: [],
      };

    case TOGGLE_TODO:
      const toggleToDoList = state.todoList.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todoList", JSON.stringify(toggleToDoList));
      return {
        todoList: toggleToDoList,
      };

    case DELETE_TODO:
      const delToDoList = state.todoList.filter((todo) => todo.id !== payload);
      localStorage.setItem("todoList", JSON.stringify(delToDoList));
      return {
        todoList: delToDoList,
      };

    default:
      return state;
  }
};

export default todoReducer;
