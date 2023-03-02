import axios from "axios";
import { useState } from "react";

const AddTask = ({
  tasks,
  getTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const addTask = async (obj) => {
    const BASE_URL = "https://63f88fe25b0e4a127de89fae.mockapi.io/todo";
    await axios
      .post(`${BASE_URL}`, obj)
      .then((response) => {
        console.log(response);
        if (Math.trunc(response.status / 100) !== 2) {
          throw new Error(`Error ${response.status} ${response.statusText}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    getTasks();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task: newTask, date: taskDate, taskDone: false });
    setNewTask("");
    setTaskDate("");
    setInfoMessage("Task added");
    setShowInfo(true);
    setTimeout(() => {
      setShowInfo(false);
    }, 1000);
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task">Add a task</label>
        <input
          type="text"
          className="form-control"
          id="task"
          aria-describedby="textHelp"
          placeholder="Task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-date">Add Day & Time</label>
        <input
          type="datetime-local"
          min={new Date(Date.now()).toISOString().slice(0, 16)}
          className="form-control"
          id="task-date"
          placeholder="Day & Time"
          value={taskDate}
          onChange={(e) => {
            if (new Date(e.target.value) <= new Date()) {
              console.log(e.target.closest("form"));
              e.target.closest("form").reset();
              e.currentTarget.blur();
              alert(
                "You cant input a date-time before current date-time, try again."
              );
            } else {
              setTaskDate(e.target.value);
            }
          }}
          // odaklı iken odak kaybedildiğinde tetiklenir.
          // onBlur={(e) => {
          //   e.target.blur();
          // }}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default AddTask;
