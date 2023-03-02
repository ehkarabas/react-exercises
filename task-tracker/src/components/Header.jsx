import { useState } from "react";
import AddTask from "./AddTask";

export const Button = () => {
  return <div>Button</div>;
};

const Header = ({
  tasks,
  setTasks,
  showInfo,
  setShowInfo,
  infoMessage,
  setInfoMessage,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <h1>Task tracker</h1>
        <button
          className="btn btn-danger text-light"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Close Add Task Bar" : "Show Add Task Bar"}
        </button>
      </div>
      {show && (
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          infoMessage={infoMessage}
          setInfoMessage={setInfoMessage}
        />
      )}
    </>
  );
};

export default Header;
