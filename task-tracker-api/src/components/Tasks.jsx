import axios from "axios";
import classNames from "classnames";
import { useEffect, useState } from "react";

// const isActive = true;
// const classes = classNames("foo", { "bar": isActive }, "baz");
// // classes: "foo bar baz"

// const taskClass = classNames({
//   done: done,
// });
// <div
//   className={`d-flex justify-content-between align-items-center p-3 ${taskClass}`}
//   onClick={() => {
//     setDone(!done);
//   }}
// ></div>;

const Task = ({
  index,
  task: { task, date, id, taskDone },
  tasks,
  getTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  const delTask = async (objID) => {
    const BASE_URL = "https://63f88fe25b0e4a127de89fae.mockapi.io/todo";
    await axios
      .delete(`${BASE_URL}/${objID}`)
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

  const editTask = async (doneVal) => {
    const BASE_URL = "https://63f88fe25b0e4a127de89fae.mockapi.io/todo";
    await axios
      .put(`${BASE_URL}/${id}`, { task, date, taskDone: doneVal, id })
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

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      delTask(id);
      setInfoMessage("Task removed");
      setShowInfo(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 1000);
    }
  };

  const handleDone = (e) => {
    if (e.target.tagName !== "I") {
      if (taskDone) {
        setInfoMessage("Task setted as undone.");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      } else {
        setInfoMessage("Task done! Congratulations");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      }
      editTask(!taskDone);
    }
  };

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };

  return (
    <div
      className={`task d-flex justify-content-between align-items-center p-3 ${
        taskDone && "done"
      }`}
      onClick={handleDone}
    >
      <div className="d-flex flex-column align-items-start">
        <h4>{task}</h4>
        <small>{new Date(date).toLocaleString("tr-TR", options)}</small>
      </div>
      <div onClick={handleRemove}>
        <i className="remove-btn fa-solid fa-xmark fa-2x text-dark"></i>
      </div>
    </div>
  );
};

const TempInfo = ({ infoMessage }) => {
  return (
    <div
      className={`tempInfo ${
        infoMessage === "Task added"
          ? "taskAdded"
          : infoMessage === "Task done! Congratulations"
          ? "taskDone"
          : infoMessage === "Task setted as undone."
          ? "taskUndone"
          : "taskRemove"
      }`}
    >
      <p>{infoMessage}</p>
    </div>
  );
};

const Tasks = ({
  tasks,
  getTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  return (
    <div className="mt-4 text-center d-flex flex-column gap-3">
      {tasks.length ? (
        tasks.map((task, index) => {
          return (
            <Task
              key={index + 1}
              index={index}
              task={task}
              tasks={tasks}
              getTasks={getTasks}
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              infoMessage={infoMessage}
              setInfoMessage={setInfoMessage}
            />
          );
        })
      ) : (
        <p>No tasks to show</p>
      )}
      {showInfo && <TempInfo infoMessage={infoMessage} />}
    </div>
  );
};

export default Tasks;
