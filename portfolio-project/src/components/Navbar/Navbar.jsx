import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

// ! Link ve NavLink ayni islevi gorur, tek farki NavLink acitve class'ina sahiptir, yani tiklanildigini anlayabilir
const Navbar = () => {
  const { pathname: path } = useLocation();
  return (
    <div className="navbar">
      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          color: isActive ? "#ff652f" : "inherit",
        })}
      >
        Home
      </NavLink>
      <Link
        to={"/about"}
        style={{
          color: path === "/about" ? "#ff652f" : "inherit",
        }}
      >
        About Me
      </Link>
      <NavLink
        to={"/projects"}
        style={({ isActive }) => ({
          color: isActive ? "#ff652f" : "inherit",
        })}
      >
        My Projects
      </NavLink>
      <NavLink
        to={"/contact"}
        style={({ isActive }) => ({
          color: isActive ? "#ff652f" : "inherit",
        })}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
