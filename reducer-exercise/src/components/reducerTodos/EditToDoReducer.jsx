import React, { useEffect, useState } from "react";

const EditToDoReducer = ({
  editToDoReducer: { id, name, complete },
  handleEditToDoSubmit,
}) => {
  // console.log(id, name, complete);

  // ! useState hook'u kullanarak başlangıç durumunu ayarlamaya çalışırken, editToDo değerleri henüz mevcut olmayabilir. Bu durumda, bileşen yeniden işlendiğinde ve editToDo değerleri güncellendiğinde bile, başlangıç durumunu güncellemez.

  // ! Bunu çözmek için, useEffect hook'unu kullanarak editToDo nesnesindeki değişiklikleri izleyebilir ve durumu güncelleyebilirsiniz

  const [newToDo, setNewToDo] = useState({
    id: undefined,
    task: undefined,
    isDone: undefined,
  });

  useEffect(() => {
    setNewToDo({
      id: id,
      task: name,
      isDone: complete,
    });
  }, [id, name, complete]);

  // const handleClickOutside = (event) => {
  //   const modal = document.getElementById("editToDoReducerModal");
  //   if (modal && event.target !== modal && !modal.contains(event.target)) {
  //     setNewToDo({
  //       id: id,
  //       task: name,
  //       isDone: complete,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", handleClickOutside);
  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  // console.log(newToDo);

  return (
    <>
      {/* Modal */}
      <div
        data-te-modal-init=""
        className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editToDoReducerModal"
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
                Edit To-Do
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                id="editReducerModalCloseButton"
                data-te-modal-dismiss=""
                aria-label="Close"
                onClick={() => {
                  setNewToDo({
                    id: id,
                    task: name,
                    isDone: complete,
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
              id="editToDoReducerForm"
              onSubmit={(e) => {
                handleEditToDoSubmit(e, newToDo);
              }}
            >
              <div className="px-4 min-w-[248px] w-[75%] mx-auto">
                <div className="relative z-0  mb-6 group">
                  <input
                    type="text"
                    name="floating_text"
                    id="floating_text"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-slate-500  dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={newToDo.task}
                    required
                    onChange={(e) => {
                      setNewToDo({ ...newToDo, task: e.target.value });
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
                  <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={newToDo.isDone}
                      onChange={(e) => {
                        setNewToDo({ ...newToDo, isDone: !newToDo.isDone });
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {newToDo.isDone ? "Completed" : "Not Completed"}
                    </span>
                  </label>
                </div>
              </div>

              <hr className="h-[2px] bg-neutral-100 dark:opacity-50 border-none w-full my-4" />

              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md  border-neutral-100 bt-4 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-modal-dismiss=""
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                  onClick={() => {
                    setNewToDo({
                      id: id,
                      task: name,
                      isDone: complete,
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

export default EditToDoReducer;
