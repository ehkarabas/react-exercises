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
  task: { task, date },
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
      setTasks(newTasks);
      setInfoMessage("Task removed");
      setShowInfo(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 1000);
    }
  };

  // const handleDone = (e) => {
  //   if (e.target.tagName !== "I") {
  //     let newDoneArr = [...done];
  //     if (
  //       newDoneArr.length &&
  //       newDoneArr.find((doneTask) => doneTask.doneIndex === index)
  //     ) {
  //       newDoneArr = newDoneArr.map((doneTask) => {
  //         if (doneTask.doneIndex === index) {
  //           console.log(doneTask);
  //           return { ...doneTask, done: !doneTask.done };
  //         } else {
  //           return doneTask;
  //         }
  //       });
  //     } else {
  //       let doneObj = { done: true, doneIndex: index };
  //       newDoneArr.push(doneObj);
  //     }
  //     setDone(newDoneArr);
  //   }
  // };

  const handleDone = (e) => {
    if (e.target.tagName !== "I") {
      const newDoneArr = [...done];
      const taskIndex = newDoneArr.indexOf(index);
      if (taskIndex !== -1) {
        newDoneArr.splice(taskIndex, 1);
        setInfoMessage("Task setted as undone.");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      } else {
        newDoneArr.push(index);
        setInfoMessage("Task done! Congratulations");
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1000);
      }
      setDone(newDoneArr);
    }
  };

  const isDone = done.includes(index);

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
      // className={`task d-flex justify-content-between align-items-center p-3 ${
      //   done.find((item) => item.doneIndex === index)?.done && "done"
      // }`}
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

  console.log(done);
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
