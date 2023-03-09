import { useContext } from "react";
import { DarkLightContext } from "../../context/darkLightContext";
import Toggle from "./DarkLightToggle.style";
import { darkIcon, lightIcon } from "../../helper/iconData";

const DarkLightToggle = () => {
  const { darkLight, toggleDarkLight } = useContext(DarkLightContext);
  return (
    <Toggle
      onClick={toggleDarkLight}
      bgcolor={darkLight === "day" ? "#ffffff55" : "#22222255"}
    >
      {darkLight === "day" ? lightIcon : darkIcon}
    </Toggle>
  );
};

export default DarkLightToggle;
