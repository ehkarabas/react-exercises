import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

// ES6 ile birlikte key ile value variable'i ayni isimdeyse yalnizca variable name yazilsa varName:varName key-value'su islenmis olur.
export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const clearTodo = () => ({ type: CLEAR_TODO });

export const toggleTodo = (payload) => ({ type: TOGGLE_TODO, payload });

export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
