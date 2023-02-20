import Form from "./components/Form/Form";

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  gap: "2rem",
};

function App() {
  return (
    <div className="App">
      <main style={mainStyle}>
        <Form />
      </main>
    </div>
  );
}

export default App;
