import Lesson from "./pages/Lesson";
import Header from "./components/Header/Header";
import { data } from "./helper/data";
import { useState } from "react";

const appStyle = {
  minHeight: "100vh",
  paddingBottom: "1rem",
  backgroundImage:
    "linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )",
};

const generalWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(108, 108, 108, 0.466)",
  padding: "2rem",
  borderRadius: "1rem",
  rowGap: "2rem",
};

function App() {
  const [state, setState] = useState(true);
  const handlerClick = () => {
    setState(false);
  };
  const itemsCount = data.length;
  console.log(state);
  return (
    <div style={appStyle}>
      <Header />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 5vw",
        }}
      >
        <article style={generalWrapperStyle}>
          <h3>{state ? itemsCount : 0} lessons today</h3>
          <div className="row g-3 justify-content-sm-center align-items-sm-center">
            {/* Destructuring on air */}
            {state
              ? data.map(({ id, name, age, image }) => (
                  <Lesson id={id} name={name} age={age} image={image} />
                ))
              : console.log("Lessons cleared.")}
          </div>
          <button onClick={handlerClick} className="btn btn-secondary">
            Clear List
          </button>
        </article>
      </main>
    </div>
  );
}

export default App;
