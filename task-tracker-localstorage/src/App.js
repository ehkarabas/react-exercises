import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [showInfo, setShowInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  return (
    <div className="tasks-wrapper">
      <Header
        tasks={tasks}
        setTasks={setTasks}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        infoMessage={infoMessage}
        setInfoMessage={setInfoMessage}
      />
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        infoMessage={infoMessage}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
}

export default App;
