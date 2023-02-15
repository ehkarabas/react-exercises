import logo from "../../images/ehlogo-transparent.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <h1>
        Cool<span>Dev</span>
        <span className="after-company">'s Schedule</span>
      </h1>
    </header>
  );
};

export default Header;
