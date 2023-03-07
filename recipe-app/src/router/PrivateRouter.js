import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

const PrivateRouter = () => {
  const {pathname:path} = useLocation();
  const { login } = useContext(LoginContext);
  return login ? <Outlet /> : <Navigate to="/login" state={path} />;
};

export default PrivateRouter;
