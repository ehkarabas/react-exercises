import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

const Navbar = () => {
  const { currentUser, image } = useSelector((state) => state.auth);
  const { logout } = useAuthCall();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const brandTextStyle = makeStyles({
  //   root: {
  //     // xs breakpoint -> max-width: 599px
  //     // sm breakpoint -> min-width : 600px
  //     // md breakpoint
  //     "@media (min-width: 900px)": {
  //       // ".MuiTypography-root": { fontSize: "0.8rem !important" },
  //       fontSize: "0.8rem !important",
  //     },
  //     // lg breakpoint
  //     "@media (min-width: 1200px)": {
  //       fontSize: "0.95rem !important",
  //     },
  //     // xl breakpoint
  //     "@media (min-width: 1536px)": {
  //       fontSize: "1.1rem !important",
  //     },
  //   },
  // });

  // tailwind'e alternatif
  const brandSpanStyle = makeStyles({
    root: {
      color: "aqua !important",
    },
  });

  const brandSpanClasses = brandSpanStyle();

  // + MUI'de color gibi proplarda kullanilacak renkler pre-defined renkler olmalidir(primary,secondary,transparent). Ozel renkler icin sx -> backgroundColor kullanilmalidir.

  return (
    <>
      <AppBar position="sticky" className=" dark:bg-blue-900 dark:text-white">
        <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 3 } }}>
          <Toolbar disableGutters>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() => {
                navigate("/");
              }}
            >
              <Avatar
                alt="Cool Dev"
                // src="https://yt3.ggpht.com/yti/AHXOFjUjayjo4-u4f4EZO1fbg3isgYnwDENZRmNmkFxV=s88-c-k-c0x00ffffff-no-rj-mo"
                src="images/ehlogo-transparent.png"
                sx={{ display: { xs: "none", md: "flex" } }}
                variant="square"
              />
              {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                // component={Link}
                // to="/"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: {
                    xs: "inherit",
                    md: "0.8rem",
                    lg: "0.95rem",
                    xl: "1.1rem",
                  },
                }}
                // className={brandTextClasses.root}
              >
                COOL
                <span className={brandSpanClasses.root}>BLOG</span>
              </Typography>
            </Stack>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu} component={Link} to="/">
                  <Typography textAlign="center">DASHBOARD</Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/new-blog"
                >
                  <Typography textAlign="center">NEW BLOG</Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to="/about"
                >
                  <Typography textAlign="center">ABOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Avatar
                  alt="Cool Dev"
                  // src="https://yt3.ggpht.com/yti/AHXOFjUjayjo4-u4f4EZO1fbg3isgYnwDENZRmNmkFxV=s88-c-k-c0x00ffffff-no-rj-mo"
                  src="images/ehlogo-transparent.png"
                  variant="square"
                />
                {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
                <Typography
                  variant="h5"
                  noWrap
                  // component="a"
                  // href=""
                  sx={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: {
                      xs: "1.2rem !important",
                      md: "0.8rem !important",
                      lg: "0.95rem !important",
                      xl: "1.1rem !important",
                    },
                  }}
                  // className={brandTextClasses.root}
                >
                  <Stack direction={{ xs: "column", sm: "row" }}>
                    <span>COOL</span>
                    <span className={brandSpanClasses.root}>BLOG</span>
                  </Stack>
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/"
              >
                <Typography textAlign="center">DASHBOARD</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/new-blog"
              >
                <Typography textAlign="center">NEW BLOG</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/about"
              >
                <Typography textAlign="center">ABOUT</Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack direction="row" spacing={2}>
                <ThemeToggle />
                <Tooltip title="User actions">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={currentUser || "User"}
                      src={
                        image ||
                        "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg"
                      }
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg";
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {currentUser ? (
                  <div>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate("/my-blogs");
                      }}
                    >
                      <Typography textAlign="center">My Blogs</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate("/profile");
                      }}
                    >
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        logout();
                        navigate("/login");
                      }}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate("/login");
                      }}
                    >
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate("/register");
                      }}
                    >
                      <Typography textAlign="center">Register</Typography>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
