import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { GlobalStyles } from "../styles/Global.styles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import DarkLightToggle from "../components/darkLightToggle/DarkLightToggle";
import Query from "../pages/home/Query";

const AppRouter = () => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              query={query}
              setQuery={setQuery}
              selectType={selectType}
              setSelectType={setSelectType}
              myData={myData}
              setMyData={setMyData}
            />
          }
        >
          <Route
            path="/query/:query"
            element={
              <Query query={query} selectType={selectType} myData={myData} />
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        {/* <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route> */}
        <Route element={<PrivateRouter />}>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
      <DarkLightToggle />
    </BrowserRouter>
  );
};

export default AppRouter;
