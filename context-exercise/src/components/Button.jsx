import React, { useContext } from "react";
import { ThemeContextConsumer, ThemeContext } from "../context/themeContext";

function Button(props) {
  // return (
  //   <ThemeContextConsumer>
  //     {(context) => (
  //       <button
  //         className={`${context.theme}-button button`}
  //         onClick={context.toggleTheme}
  //       >
  //         Switch Theme to
  //         {context.theme.toLowerCase() === "day" ? (
  //           <span role="img" aria-label="moon">
  //             🌚
  //           </span>
  //         ) : (
  //           <span role="img" aria-label="sun">
  //             🌞
  //           </span>
  //         )}
  //       </button>
  //     )}
  //   </ThemeContextConsumer>
  // );

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`${theme}-button button`} onClick={toggleTheme}>
      Switch Theme to
      {theme.toLowerCase() === "day" ? (
        <span role="img" aria-label="moon">
          🌚
        </span>
      ) : (
        <span role="img" aria-label="sun">
          🌞
        </span>
      )}
    </button>
  );
}

export default Button;
