import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { menuIcon, darkMenuIcon } from "../../helper/iconData";
import { Nav, Logo, Menu, MenuLink, HamburgerIcon } from "./Navbar.style";
import Flex from "../../styles/Flex";
import { DarkLightContext } from "../../context/darkLightContext";

const Navbar = ({ currentUser, SetCurrentUser }) => {
  // console.log(currentUser);
  const [showMenu, setShowMenu] = useState(false);
  const { darkLight } = useContext(DarkLightContext);
  return (
    <Nav justify="flex-start">
      <Flex justify="space-between" width="100%">
        <Logo to="/">
          Cool<span style={{ color: "aqua" }}>Dev</span> Library
        </Logo>
        <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
          {darkLight === "day" ? menuIcon : darkMenuIcon}
        </HamburgerIcon>
      </Flex>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {currentUser ? (
          <MenuLink
            to="/login"
            onClick={() => {
              let timerInterval;
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully logged out.",
                html: "Automatically close in <b></b> seconds.",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  const b = Swal.getHtmlContainer().querySelector("b");
                  timerInterval = setInterval(() => {
                    b.textContent = Math.round(Swal.getTimerLeft() / 1000);
                  }, 100);
                },
                willClose: () => {
                  setTimeout(() => {
                    sessionStorage.clear();
                    SetCurrentUser(false);
                  }, 1000);
                  clearInterval(timerInterval);
                },
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  // console.log("I was closed by the timer");
                }
              });
            }}
          >
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/login" activecolor="orange">
              Login
            </MenuLink>
            <MenuLink to="/register" activecolor="orange">
              Register
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
