import { useState } from "react";
import { TODO_ACTIONS } from "../../App";
import {
  toastConfirmToDoDelReducer,
  toastSuccessNotify,
} from "../../helper/ToastNotify";
import EditToDoReducer from "./EditToDoReducer";

const ToDosReducer = ({
  toDo,
  setToDo,
  stateToDo,
  dispatchToDo,
  handleEditToDoSubmit,
}) => {
  const [editToDoReducer, setEditToDoReducer] = useState("");

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const handleDone = (id, complete) => {
    dispatchToDo({ type: TODO_ACTIONS.TOGGLE_TODO, payload: id });
    if (complete) {
      toastSuccessNotify("Task succesfully setted as undone.");
    } else {
      toastSuccessNotify("Task done! Congratulations!");
    }
  };

  const handleDelete = (id) => {
    dispatchToDo({ type: TODO_ACTIONS.DEL_TODO, payload: id });
  };

  return (
    <>
      <ul className="min-w-[248px] w-[75%] mx-auto space-y-2">
        {stateToDo.map(({ id, name, date, complete }, index) => {
          return (
            <div key={`todo_item_${index + 1}`}>
              <li
                className={`todo-item p-4 rounded-xl text-sm bg-slate-500 text-warning-500 flex justify-between items-center ${
                  complete ? "done-wrapper" : ""
                }`}
                onDoubleClick={() => {
                  handleDone(id, complete);
                }}
              >
                <div className="w-full flex flex-col justify-start items-center gap-2 mx-auto">
                  <div className="w-full flex flex-wrap justify-evenly items-center gap-4">
                    <span
                      className={` break-all grow ${
                        complete ? "done-data" : ""
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col justify-end items-start">
                      <div className="flex justify-start items-center">
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="p-1"
                          data-te-toggle="modal"
                          data-te-backdrop="static"
                          data-te-target="#editToDoReducerModal"
                          data-te-ripple-init=""
                          data-te-ripple-color="light"
                          onClick={() =>
                            setEditToDoReducer({ id, name, complete })
                          }
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          type="button"
                          className="p-1"
                          onClick={() => {
                            toastConfirmToDoDelReducer(id, handleDelete);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                      <span className={complete ? "done-data" : ""}>{id}</span>
                    </div>
                    <div className="flex flex-col justify-end items-end mt-auto">
                      <small
                        className={` text-[0.7rem] ${
                          complete ? "done-data" : ""
                        }`}
                      >
                        {new Date(date).toLocaleString("en-US", options)}
                      </small>
                      <span>Completed: {complete.toString()}</span>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <EditToDoReducer
        editToDoReducer={editToDoReducer}
        handleEditToDoSubmit={handleEditToDoSubmit}
      />
    </>
  );
};

export default ToDosReducer;
