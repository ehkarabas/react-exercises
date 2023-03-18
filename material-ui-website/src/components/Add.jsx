import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useTheme } from "@emotion/react";

const Add = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "50vw", md: 40 },
          transform: { xs: "translateX(-50%)" },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          width={280}
          height={280}
          bgcolor="background.default"
          color="text.primary"
          p={2}
          borderRadius={5}
          sx={{
            border: `2px solid ${
              theme.palette.mode === "dark" ? "aqua" : "transparent"
            }`,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            color="gray"
          >
            Create Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <Avatar
              alt="user avatar"
              src="https://yt3.ggpht.com/yti/AHXOFjUjayjo4-u4f4EZO1fbg3isgYnwDENZRmNmkFxV=s108-c-k-c0x00ffffff-no-rj"
              sx={{ width: "1.5rem", height: "1.5rem" }}
            />
            <Typography fontWeight={500} variant="p" color="text.primary">
              Cool<span style={{ color: "aqua" }}>Dev</span>
            </Typography>
          </Box>

          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{ width: "100%" }}
          />

          <Stack direction="row" gap={1} my={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
