import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = ({ src }) => {
  console.log(src);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lorem ipsum dolor sit amet"
        subheader={new Date(
          Date.UTC(
            2018 +
              Math.floor(Math.random() * (new Date().getFullYear() - 2018)),
            0,
            1 + Math.floor(Math.random() * 365),
            0,
            0,
            0
          )
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      />
      <CardMedia component="img" height="300px" image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          quae, accusantium impedit tempore porro dolore optio dolores inventore
          sunt, earum sequi atque tempora eligendi molestiae! Hic veritatis rem
          ad! Adipisci?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
