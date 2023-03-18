import { createTheme } from "@mui/material";

export const theme = createTheme({
  // Currently it is only possible to customize the values of the predefined breakpoints.
  // https://stackoverflow.com/questions/49739635/adding-breakpoint-to-custom-theme-in-material-ui-next-reactjs
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
});
