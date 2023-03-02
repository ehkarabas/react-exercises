import { useState } from "react";
import AddTask from "./AddTask";

const Header = ({
  tasks,
  getTasks,
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
          getTasks={getTasks}
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
