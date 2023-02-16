import NavbarStyle from "../../scss/navbar.module.scss";

function Navbar() {
  return (
    <nav className={NavbarStyle["navbar"]}>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">For You</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
