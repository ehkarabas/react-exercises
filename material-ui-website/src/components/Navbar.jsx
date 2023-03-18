import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar
      // sx={{
      //   flexDirection: { xs: "column", sm: "row" },
      //   gap: { xs: "1rem", sm: "0" },
      //   marginY: { xs: "0.5rem", sm: "0" },
      // }}
      >
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" textTransform="capitalize">
            cool
          </Typography>
          <LogoDevIcon />
        </Stack>
        <Search sx={{ color: "black" }}>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="user avatar"
            src="https://yt3.ggpht.com/yti/AHXOFjUjayjo4-u4f4EZO1fbg3isgYnwDENZRmNmkFxV=s108-c-k-c0x00ffffff-no-rj"
            sx={{ width: "1.5rem", height: "1.5rem" }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="user avatar"
            src="https://yt3.ggpht.com/yti/AHXOFjUjayjo4-u4f4EZO1fbg3isgYnwDENZRmNmkFxV=s108-c-k-c0x00ffffff-no-rj"
            sx={{ width: "1.5rem", height: "1.5rem" }}
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">User</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
