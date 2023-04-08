import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <div className="form-control">
        <div className="flex justify-center items-center gap-2">
          <img
            src="./images/ehlogo-transparent.png"
            alt="firm logo"
            className="w-6 h-6"
          />
          <h2 className="text">To Do App With TypeScript</h2>
        </div>
        <div className="form">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
