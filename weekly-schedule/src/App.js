import Lesson from "./pages/Lesson";
import Header from "./components/Header/Header";
import { data } from "./helper/data";

const appStyle = {
  minHeight: "100vh",
  paddingBottom: "1rem",
  backgroundImage:
    "linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )",
};

const cardsWrapperStyle = {
  // display: "flex",
  // alignItems: "center",
  // gap: "1rem",
  // justifyContent: "center",
  backgroundColor: "rgba(108, 108, 108, 0.466)",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "1rem",
  // flexWrap: "wrap",
  // marginTop: "2rem",
};

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <div
        style={cardsWrapperStyle}
        className="row g-3 justify-content-sm-center align-items-sm-center"
      >
        {/* Destructuring on air */}
        {data.map(({ id, name, age, image }) => (
          <Lesson id={id} name={name} age={age} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
