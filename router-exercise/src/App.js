import { Route, Routes, useParams } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";

const AboutMe = () => {
  return <h1>About Me</h1>;
};

const User = () => {
  let { userId } = useParams();
  return <h1>User: {userId}</h1>;
};

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested Routes */}
        <Route path="/about" element={<About />}>
          <Route path=":userId" element={<User />} />
          <Route path="me" element={<AboutMe />} />
        </Route>
        <Route path="/users" element={<Users />} />
        {/* <Route path=":id" element={<UserDetail />} />
        </Route> */}
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
