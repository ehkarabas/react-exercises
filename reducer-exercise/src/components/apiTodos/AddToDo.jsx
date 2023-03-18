import axios from "axios";
import React, { useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../../helper/ToastNotify";

const AddToDo = ({ getToDos }) => {
  const [newToDo, setNewToDo] = useState({
    id: Date.now(),
    name: "",
    date: "",
    complete: false,
  });

  const url = process.env.REACT_APP_API_URL;

  async function addToDo(obj) {
    try {
      const response = await axios.post(url, obj);
      if (Math.trunc(response.status / 100) !== 2) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      toastErrorNotify(error);
      console.log(error);
    }
  }

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setNewToDo({ ...newToDo, id: Date.now() });
    await addToDo(newToDo);
    toastSuccessNotify("To-do succesfully added.");
    document.getElementById("addModalCloseButton").click();
    await getToDos();
  };

  const handleClickOutside = (event) => {
    const modal = document.getElementById("addToDoModal");
    if (event.target === modal) {
      setNewToDo({
        id: Date.now(),
        name: "",
        date: "",
        complete: false,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <h2 className="text-black dark:text-white capitalize text-center font-bold mt-4">
        to-do with api
      </h2>

      {/* Button trigger modal */}
      <div className="flex justify-center">
        <button
          type="button"
          className="inline-block rounded text-center my-4 bg-primary dark:bg-primary-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 dark:hover:bg-primary-300 dark:text-orange-300 dark:hover:text-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-toggle="modal"
          data-te-target="#addToDoModal"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          Add To-Do
        </button>
      </div>

      {/* Modal */}
      <div
        data-te-modal-init=""
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="addToDoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref=""
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Add A To-Do
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                id="addModalCloseButton"
                data-te-modal-dismiss=""
                aria-label="Close"
                onClick={() => {
                  setNewToDo({
                    id: Date.now(),
                    name: "",
                    date: "",
                    complete: false,
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form
              className="min-w-[280px] w-full mx-auto py-4"
              id="addToDoForm"
              onSubmit={handleAddSubmit}
            >
              <div className="px-4 min-w-[248px] w-[75%] mx-auto">
                <div className="relative z-0  mb-6 group">
                  <input
                    type="text"
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-slate-500  dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={newToDo.name}
                    required
                    onChange={(e) => {
                      setNewToDo({ ...newToDo, name: e.target.value });
                    }}
                  />
                  <label
                    htmlFor="floating_text"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    To-Do
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="datetime-local"
                    name="floating_datetime"
                    id="floating_datetime"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-slate-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={newToDo.date}
                    required
                    min={new Date(Date.now()).toISOString().slice(0, 16)}
                    onChange={(e) => {
                      if (new Date(e.target.value) <= new Date()) {
                        e.target.closest("form").reset();
                        e.currentTarget.blur();
                        toastErrorNotify(
                          "You cant input a date-time before current date-time, try again."
                        );
                      } else {
                        setNewToDo({ ...newToDo, date: e.target.value });
                      }
                    }}
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Date
                  </label>
                </div>

                {/* <div className="relative z-0 w-full mb-6 group">
                  <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={newToDo.complete}
                      onChange={(e) => {
                        setNewToDo({ ...newToDo, complete: !newToDo.complete });
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {newToDo.complete ? "Completed" : "Not Completed"}
                    </span>
                  </label>
                </div> */}
              </div>

              <hr className="h-[2px] bg-neutral-100 dark:opacity-50 border-none w-full my-4" />

              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md  border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-modal-dismiss=""
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                  onClick={() => {
                    setNewToDo({
                      id: Date.now(),
                      name: "",
                      date: "",
                      complete: false,
                    });
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
