import { Route, Routes } from "react-router-dom";
import Error from "../components/error/Error";
import Navbar from "../components/navbar/Navbar";
import { LoginContextProvider } from "../context/loginContext";
import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AppRouter = () => {
  return (
    <LoginContextProvider>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:name" element={<Details />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </LoginContextProvider>
  );
};

export default AppRouter;
