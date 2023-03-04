import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info">
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <img src="/images/ehlogo-transparent.png" alt="logo" width="40px" />
            <p className="fs-5 mb-0">Checkout Page</p>
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                style={({ isActive }) => ({
                  color: isActive && "#fff",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/new-product"
                style={({ isActive }) => ({
                  color: isActive && "red",
                  fontWeight: isActive && "bolder",
                })}
              >
                New Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/product-list"
                style={({ isActive }) => ({
                  color: isActive && "darkblue",
                  fontWeight: isActive && "bolder",
                })}
              >
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive && "#fff",
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
