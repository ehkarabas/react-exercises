import { useState } from "react";

const AddTask = ({
  tasks,
  setTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  // console.log(tasks, setTasks);
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  // console.log(new Date(Date.now()));
  // console.log(new Date(Date.now()).toISOString());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ task: newTask, date: taskDate });
    setTasks(newTasks);
    // e.currentTarget.reset();
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
          // onBlur={(e) => {
          //   e.target.blur();
          // }}
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
              alert("You cant input a date-time before now, try again.");
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
