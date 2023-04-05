import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

// const FooterWrapper = styled(Stack)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: "white",
// }));

const Footer = () => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      color="#fff"
      p={2}
      bgcolor={theme.palette.primary.main}
      component="footer"
      className=" dark:bg-blue-900 dark:text-white"
    >
      <Typography>
        Cool<span sx={{ color: "aqua !important" }}>Dev</span>
      </Typography>
      <Typography>&copy; {new Date().getFullYear()}</Typography>
    </Stack>
  );
};

export default Footer;
