import { Box, Stack } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Stack flexGrow={4} p={2} gap={2}>
      {[...Array(6).keys()].map((item) => (
        <Post
          src={`https://picsum.photos/300/200?random=${item + 1}`}
          key={`card_${item + 1}`}
        />
      ))}
    </Stack>
  );
};

export default Feed;
