import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { LoginContext } from "../../context/loginContext";
import FlexRow from "../styled/FlexRow.styled";
import Image from "../styled/Image.styled";
import "./navbarStyle.scss";

const Navbar = () => {
  const { setLogin } = useContext(LoginContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" to="/">
        <FlexRow padding="0" gap="1rem">
          <Image src="/images/ehlogo-transparent.png" setWidth="50px" />
          <h1>
            Cool<span className="text-info">Dev</span>
          </h1>
        </FlexRow>
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
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav align-items-end pe-2">
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({
                color: isActive && "red",
                fontWeight: isActive && "bolder",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about"
              style={({ isActive }) => ({
                color: isActive && "red",
                fontWeight: isActive && "bolder",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              onClick={() => {
                let timerInterval;
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Logout successful, redirecting!",
                  html: "Automatically close in <b></b> seconds.",
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                      b.textContent = Math.round(Swal.getTimerLeft() / 1000);
                    }, 100);
                  },
                  willClose: () => {
                    sessionStorage.setItem("login", false);
                    setLogin(JSON.parse(sessionStorage.getItem("login")));
                    // navigate("/login");
                    clearInterval(timerInterval);
                  },
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    // console.log("I was closed by the timer");
                  }
                });
              }}
              style={({ isActive }) => ({
                color: isActive && "red",
                fontWeight: isActive && "bolder",
              })}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
