import React, { useContext } from "react";
import {
  ThemeContext,
  ThemeContextConsumer,
  ThemeContextProvider,
} from "../context/themeContext";
import Button from "./Button";
import Counter from "./Counter";

// ! contextType kullanımı, component'in context'i almasını sağlar ve this.context özelliği ile context degerine erişilebilir. Bu, component'in render methodu içindeki herhangi bir yerde kullanılabilir.

// ! contextType, React'ta class component'lerinde context'e erişmek için kullanılan bir özelliktir.
// ! contextType'ın kullanımı, functional component'larda useContext hook'u ile veya ThemeContext.Consumer wrapper'i ile daha basit sekilde gerceklestirilir.
// class Image extends React.Component {
//   render() {
//     const theme = this.context;
//     return (
//       <div className={`${theme}-image image`}>
//         <div className={`${theme}-ball ball`} />
//         <Button />
//       </div>
//     );
//   }
// }

// Image.contextType = ThemeContext;

// export default Image

const Image = () => {
  // We don't need this anymore for functional components
  // const theme = this.context

  // return (
  //   <ThemeContextConsumer>
  //     {(context) => (
  //       <div className={`${context.theme}-image image`}>
  //         <div className={`${context.theme}-ball ball`}>
  //           {context.theme.toUpperCase()}
  //           {context.theme.toLowerCase() === "day" ? (
  //             <span role="img" aria-label="sun">
  //               🌞
  //             </span>
  //           ) : (
  //             <span role="img" aria-label="moon">
  //               🌚
  //             </span>
  //           )}
  //         </div>
  //         <Button />
  //       </div>
  //     )}
  //   </ThemeContextConsumer>
  // );

  // ! useContext hook'u ile Consumer wrapper'larina ve ilave fonksiyona ihtiyac duyulmadan createContext().Provider genel wrapper component'inin prop verilerine erisilebilir.

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}-image image`}>
      <div className={`${theme}-ball ball`}>
        {theme.toUpperCase()}
        {theme.toLowerCase() === "day" ? (
          <span role="img" aria-label="sun">
            🌞
          </span>
        ) : (
          <span role="img" aria-label="moon">
            🌚
          </span>
        )}
      </div>
      <Button />
      <Counter />
    </div>
  );
};

// We don't need this anymore for functional components
// Image.contextType = ThemeContext;

export default Image;
