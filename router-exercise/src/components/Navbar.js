import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/users"> Users </Link>
      <Link to="/contactus"> Contact Us </Link>
      <span
        onClick={() => {
          navigate("/contactus");
        }}
      >
        Contact Us(N)
      </span>
      <span
        onClick={() => {
          navigate(-1);
        }}
      >
        Back(N)
      </span>
    </div>
  );
};

export default Navbar;
