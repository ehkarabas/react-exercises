import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        flexBasis: "25vw",
      }}
    >
      <Box
        position="sticky"
        sx={{
          top: "5rem",
          height: "100vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} sx={{ flexWrap: "wrap" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt="Keisha Studdard"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Dany Crawford"
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9a88f54ca289dddaa87cf2e2437eb5c39d654b00.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>

        <ImageList cols={2}>
          {[...Array(6).keys()].map((item) => (
            <ImageListItem
              key={`image item ${item + 1}`}
              sx={{ minHeight: "75px" }}
            >
              <img
                src={`https://picsum.photos/300/200?random=${item + 1}`}
                alt={`latest post ${item + 1}`}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[...Array(3).keys()].map((item) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://material-ui.com/static/images/avatar/${
                      item + 1
                    }.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Lorem Ipsum"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Name Surname
                      </Typography>
                      {
                        " — Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quo."
                      }
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
