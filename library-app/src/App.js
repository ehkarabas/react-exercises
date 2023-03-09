import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { DarkLightContext } from "./context/darkLightContext";
import AppRouter from "./router/AppRouter";
import { theme } from "./styles/theme";

function App() {
  const { darkLight } = useContext(DarkLightContext);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          navbarBgColor:
            theme.colors[`navbarBgColor${darkLight === "day" ? "" : "Dark"}`],
          mainColor:
            theme.colors[`mainColor${darkLight === "day" ? "" : "Dark"}`],
          logoColor:
            theme.colors[`logoColor${darkLight === "day" ? "" : "Dark"}`],
          linkColor:
            theme.colors[`linkColor${darkLight === "day" ? "" : "Dark"}`],
          linkHoverColor:
            theme.colors[`linkHoverColor${darkLight === "day" ? "" : "Dark"}`],
          headerFormColor:
            theme.colors[`headerFormColor${darkLight === "day" ? "" : "Dark"}`],
          detailColor:
            theme.colors[`detailColor${darkLight === "day" ? "" : "Dark"}`],
          aboutColor:
            theme.colors[`aboutColor${darkLight === "day" ? "" : "Dark"}`],
        },
      }}
    >
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
