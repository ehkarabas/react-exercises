import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

const ThemeProviderWrapper = ({ children }) => {
  const isDark = useSelector((state) => state.theme.isDark);

  const defaultTheme = createTheme();

  const theme = createTheme({
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette, // Varsayılan renkleri korumak
      type: isDark ? "dark" : "light",
      error: {
        main: isDark ? "#f99600" : "#ff0000", // Hata rengini temaya göre değiştirmek
      },
      primary: {
        main: isDark ? "#81c784" : "#1976D2", // Primary rengini temaya göre değiştirmek
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? "#fff" : "#000",
            "&.Mui-error": {
              color: isDark ? "#f99600" : "#ff0000", // Hata durumundaki input label rengi
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: isDark ? "#fff" : "#000", // İstenilen helper text rengini temaya göre değiştirmek
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: isDark ? "#fff" : "#000", // İstenilen hatalı input border renklerini temaya göre değiştirmek
            // "&:hover": {
            //   borderColor: isDark ? "#ff0000" : "#f99600",
            // },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: isDark ? "#fff" : "#000", // İstenilen input placeholder rengini temaya göre değiştirmek
            "&::placeholder": {
              color: isDark ? "#fff" : "#000", // İstenilen input placeholder rengini temaya göre değiştirmek
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "#64748B" : "#fff", // İstenilen bg color'i temaya göre değiştirmek
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: isDark ? "#fff" : "#000", // İstenilen helper text rengini temaya göre değiştirmek
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
