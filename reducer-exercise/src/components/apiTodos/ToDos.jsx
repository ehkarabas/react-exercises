import axios from "axios";
import React, { useCallback, useState } from "react";
import {
  toastConfirmToDoDel,
  toastErrorNotify,
  toastSuccessNotify,
} from "../../helper/ToastNotify";
import EditToDo from "./EditToDo";

const ToDos = ({ data, getToDos }) => {
  const [editToDo, setEditToDo] = useState("");

  const url = process.env.REACT_APP_API_URL;

  async function doneToDo(id, obj) {
    try {
      const response = await axios.put(`${url}/${id}`, obj);
      if (Math.trunc(response.status / 100) !== 2) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      toastErrorNotify(error);
      console.log(error);
    }
  }

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  const handleDone = async (id, name, date, complete) => {
    if (complete) {
      await doneToDo(id, { id, name, date, complete: false });
      toastSuccessNotify("Task succesfully setted as undone.");
    } else {
      await doneToDo(id, { id, name, date, complete: true });
      toastSuccessNotify("Task done! Congratulations!");
    }
    await getToDos();
  };

  const handleRemove = async (id) => {
    await toastConfirmToDoDel(id, getToDos);
  };

  return (
    <>
      <ul className="min-w-[248px] w-[75%] mx-auto space-y-2">
        {data.map(({ id, name, date, complete }, index) => {
          return (
            <div key={`todo_item_${index + 1}`}>
              <li
                className={`todo-item  p-4 rounded-xl bg-slate-500 text-warning-500 flex justify-between items-center ${
                  complete ? "done-wrapper" : ""
                }`}
                onDoubleClick={() => {
                  handleDone(id, name, date, complete);
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
                          data-te-target="#editToDoModal"
                          data-te-ripple-init=""
                          data-te-ripple-color="light"
                          onClick={() => {
                            setEditToDo({ id, name, date, complete });
                          }}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <button
                          type="button"
                          className="p-1"
                          onClick={() => {
                            handleRemove(id);
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
      <EditToDo editToDo={editToDo} getToDos={getToDos} />
    </>
  );
};

export default ToDos;
