import React from "react";
import { delDialog, getBaseUrl } from "../helpers/utils";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { errorCatcher } from "../helpers/utils";
import Swal from "sweetalert2";
// import DeleteModal from "./DeleteModalTwElements";

interface ITodoListItemProps {
  todo: TodoType;
  getTodos(): Promise<void>;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({ todo, getTodos }) => {
  const BASE_URL = getBaseUrl();

  const delToDo = async (id: string | number): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
      toastSuccessNotify("Todo successfully deleted.");
    } catch (error: unknown) {
      errorCatcher(error);
    }
  };

  const handleToggleToDo = async (
    // e: React.MouseEvent<HTMLElement>,
    todo: TodoType
  ): Promise<void> => {
    try {
      await axios.put(`${BASE_URL}/${todo.id}/`, {
        ...todo,
        isDone: !todo.isDone,
      });
      await getTodos();
    } catch (error) {
      errorCatcher(error);
    }
  };

  return (
    <>
      <li
        onDoubleClick={(e) => {
          handleToggleToDo(todo);
        }}
      >
        {todo.isDone ? (
          <p className="checked">
            <i className="fa-solid fa-check"></i> {todo.task}
          </p>
        ) : (
          <p> {todo.task} </p>
        )}

        <span className="task-icons">
          <i
            className="fa-solid fa-xmark"
            // data-te-toggle="modal"
            // data-te-target="#exampleModal"
            // data-te-ripple-init=""
            // data-te-ripple-color="light"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              delDialog({ id: todo.id, delFunc: delToDo, getFunc: getTodos });
            }}
          ></i>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;
