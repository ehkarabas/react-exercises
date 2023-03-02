import classNames from "classnames";
import { useState } from "react";

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
  task: { task, date, done: isDone },
  done,
  setDone,
  tasks,
  setTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  console.log(setInfoMessage);
  const handleRemove = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
      setInfoMessage("Task removed");
      setShowInfo(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 1000);
    }
  };

  const handleDone = (e) => {
    if (e.target.tagName !== "I") {
      const newDoneArr = [...done];
      const taskIndex = newDoneArr.indexOf(index);
      const lsArr = [...tasks];
      const editedObj = lsArr[index];
      if (taskIndex !== -1) {
        newDoneArr.splice(taskIndex, 1);
        editedObj.done = false;
        lsArr.splice(index, 1, editedObj);
        localStorage.setItem("tasks", JSON.stringify(lsArr));
        setDone(newDoneArr);
        setInfoMessage("Task setted as undone.");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      } else {
        newDoneArr.push(index);
        editedObj.done = true;
        lsArr.splice(index, 1, editedObj);
        localStorage.setItem("tasks", JSON.stringify(lsArr));
        setDone(newDoneArr);
        setInfoMessage("Task done! Congratulations");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      }
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
        isDone && "done"
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
  setTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  const [done, setDone] = useState([]);

  return (
    <div className="mt-4 text-center d-flex flex-column gap-3">
      {tasks.length ? (
        tasks.map((task, index) => {
          return (
            <Task
              key={index + 1}
              index={index}
              task={task}
              done={done}
              setDone={setDone}
              tasks={tasks}
              setTasks={setTasks}
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
