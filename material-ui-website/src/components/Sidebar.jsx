import {
  Box,
  css,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      // bgcolor="skyblue"
      sx={{
        display: { xs: "none", sm: "block" },
        flexShrink: "2",
        padding: { lg: 0, xl: "1rem" },
      }}
    >
      <Box
        position="sticky"
        sx={{
          top: "5rem",
          // height: "100vh",
          // overflowY: "auto",
          // "&::-webkit-scrollbar": {
          //   display: "none",
          // },
          // "-ms-overflow-style": "none",
          // "scrollbar-width": "none",
          // width: "150px",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#pages"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#groups"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#store"
              sx={{
                padding: "0",
                paddingLeft: "5px",
                paddingBottom: "10px",
              }}
            >
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#friends"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#settings"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{ padding: "0", paddingLeft: "5px", paddingBottom: "10px" }}
            >
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <Switch
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
