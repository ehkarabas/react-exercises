import { NavLink } from "react-router-dom";
import Flex from "./styled-components/Flex.styled";
import Nav from "./styled-components/Nav.styled";

const Navbar = () => {
  return (
    <Nav>
      <Flex
        padding="1rem 2rem"
        justify="space-between"
        bgcolor="#202022"
        wrap="wrap"
        className="navbar"
      >
        <NavLink to="/" style={{ textTransform: "none", color: "#fff" }}>
          <Flex gap="1rem">
            <img
              src="./images/ehlogo-transparent.png"
              alt="brand_logo"
              width="50px"
            />
            <h1>
              Cool<span className="text-info">Dev</span>
            </h1>
          </Flex>
        </NavLink>
        <Flex gap="1rem">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#00bbc9" : "#fff",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#00bbc9" : "#fff",
            })}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? "#00bbc9" : "#fff",
            })}
          >
            Services
          </NavLink>
        </Flex>
      </Flex>
    </Nav>
  );
};

export default Navbar;
