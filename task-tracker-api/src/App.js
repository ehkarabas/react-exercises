import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [error, setError] = useState(false);

  const getTasks = async () => {
    const BASE_URL = "https://63f88fe25b0e4a127de89fae.mockapi.io/todo";
    await axios(BASE_URL)
      .then((response) => {
        // console.log(response);
        if (Math.trunc(response.status / 100) !== 2) {
          setError(true); // Girilen URL'ye gore API'de veri yoksa
          throw new Error(`Error ${response.status} ${response.statusText}`);
        } else {
          return response.data;
        }
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  // console.log(tasks);

  return error ? (
    <div className="error-wrapper d-flex flex-column justify-content-center align-items-center gap-3">
      <h1 className="display-3 text-danger">Oops, something went wrong</h1>
      <p className="font-italic">Check console to display error message</p>
    </div>
  ) : (
    <div className="tasks-wrapper">
      <Header
        tasks={tasks}
        // setTasks={setTasks}
        getTasks={getTasks}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        infoMessage={infoMessage}
        setInfoMessage={setInfoMessage}
      />
      <Tasks
        tasks={tasks}
        // setTasks={setTasks}
        getTasks={getTasks}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        infoMessage={infoMessage}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
}

export default App;
