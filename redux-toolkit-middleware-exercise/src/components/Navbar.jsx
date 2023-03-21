import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO user bilgisini global state'ten oku
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const handleLogut = () => {
    // TODO user'i global state'ten sil
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#444" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Cool<span style={{ color: "aqua" }}>Dev</span> News
          </Typography>
          {user?.email && (
            <Button color="inherit" onClick={handleLogut}>
              Logout
            </Button>
          )}
          {!user?.email && (
            <Button
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
