import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useSelector } from "react-redux";
import { Box, Button, Paper, Stack } from "@mui/material";
import useBlogCall from "../../hooks/useBlogCall";

const BlogCard = ({ blog }) => {
  const { isDark } = useSelector((state) => state.theme);
  const currentUser = useSelector((state) => state.auth);
  const { likeCreate, commentsToggler } = useBlogCall();
  const navigate = useNavigate();

  const listStyles = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    m: 2,
  };

  // + nullish coalescing operatörü(??), iki değer arasında bir seçim yapar ve sol taraftaki değer null veya undefined ise, sağ taraftaki değeri döndürür.

  // + textOverflow: "ellipsis" -> Bu property, bir metin kutusu içindeki metin sığmadığında nasıl kırpılacağını belirler. "ellipsis" değeri, metin sığmazsa üç nokta (...) ile kırpılmasını sağlar.

  // + display: "-webkit-box" -> Bu property, öğenin gösterim biçimini belirler. "-webkit-box" eski WebKit tarayıcılarında flexbox düzenini kullanmak için kullanılır. Yeni tarayıcılarda display: "flex" kullanmak daha yaygındır, ancak bazı eski tarayıcılar için geriye dönük uyumluluk sağlamak amacıyla "-webkit-box" kullanılabilir.

  // + WebkitLineClamp: "2" -> Bu property, bir metin kutusunda kaç satırın gösterileceğini belirler. Bu örnek için "2" değeri, metnin yalnızca iki satırını gösterir ve daha fazla satır varsa kırpılır. Bu özellik yalnızca WebKit tabanlı tarayıcılarda çalışır (ör. Chrome, Safari).

  // + WebkitBoxOrient: "vertical" -> Bu property, flexbox yönünü belirler. "vertical" değeri, flexbox'in içindeki öğelerin dikey yönde sıralanmasını sağlar(flex-direction:column). Bu özellik de yalnızca WebKit tabanlı tarayıcılarda çalışır.

  const handleLikeAndDirect = (e) => {
    if (e.currentTarget.id === `like-button-${blog?.id}`) {
      likeCreate(blog?.id);
    } else if (e.currentTarget.id === `comment-button-${blog?.id}`) {
      commentsToggler(true);
      navigate(`/detail/${blog?.id}/`, {
        state: { dashboardBlogDetail: blog },
      });
    } else {
      commentsToggler(false);
      navigate(`/detail/${blog?.id}/`, {
        state: { dashboardBlogDetail: blog },
      });
    }
  };

  // console.log(
  //   [
  //     { name: "John", surname: "Emma", age: 12 },
  //     { name: "Ron", surname: "Edna", age: 15 },
  //   ].find((person) => person.name === "John")
  // ); // {name: 'John', surname: 'Emma', age: 12}

  // console.log(
  //   [
  //     { name: "John", surname: "Emma", age: 12 },
  //     { name: "Ron", surname: "Edna", age: 15 },
  //   ].filter((person) => person.name === "John")
  // ); // [{name: 'John', surname: 'Emma', age: 12}]

  // console.log(blog);

  return (
    <Paper
      sx={{
        minWidth: "270px",
        width: "auto",
        maxWidth: "350px",
        m: "10px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
      }}
      elevation={10}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={2}
        sx={{
          width: "100%",
        }}
      >
        <img
          src={
            blog?.image ||
            "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg"
          }
          alt="img"
          className="h-48 object-cover object-center"
          onError={(e) => {
            e.currentTarget.src =
              "https://thumbs.dreamstime.com/b/no-image-icon-vector-available-picture-symbol-isolated-white-background-suitable-user-interface-element-205805243.jpg";
          }}
        />
      </Stack>
      <Box sx={{ m: 0, mt: 1, width: "100%" }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textAlign: "center", color: isDark ? "red" : "green" }}
        >
          {blog?.title?.toUpperCase()}
        </Typography>
        <Typography sx={listStyles}>{blog?.content ?? "No Content"}</Typography>
      </Box>

      <Stack>
        <Typography sx={{ textAlign: "left", m: 2, mb: 0 }}>
          {blog?.publish_date
            ? new Date(blog?.publish_date).toLocaleString("en-US")
            : "No date"}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            textAlign: "left",
            m: 2,
            my: 1,
            color: "black",
          }}
        >
          <AccountCircle />
          <span>{blog?.author ?? "No author"}</span>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2, pt: 0, width: "100%" }}
        // sx={{ mx: "auto", mt: 0, width: "calc(100% - 1rem)" }}
        // + width ve margin kombinasyonunda tasma sorunlari olusur. Eğer bir elementin width'i %100 iken margin de verilmisse toplam genişlik parent container'inin genişliğini aşacaktir.
      >
        <Box>
          <IconButton
            aria-label="add to favorites"
            sx={{ textAlign: "left", alignItems: "left" }}
            id={`like-button-${blog?.id}`}
            onClick={(e) => {
              handleLikeAndDirect(e);
            }}
          >
            <FavoriteIcon
              sx={{
                color: `${
                  blog?.likes_n?.filter(
                    (like) => like.user_id === currentUser?.id
                  ).length > 0
                    ? "red"
                    : "gray"
                }`,
              }}
            />
            <span>{blog?.likes ?? "0"}</span>
          </IconButton>

          <IconButton
            aria-label="add to favorites"
            id={`comment-button-${blog?.id}`}
            sx={{ textAlign: "left", alignItems: "left" }}
            onClick={(e) => {
              handleLikeAndDirect(e);
            }}
          >
            <ChatBubbleOutlineOutlinedIcon />
            <span>{blog?.comment_count ?? "0"}</span>
          </IconButton>

          <IconButton
            aria-label="view"
            onClick={(e) => {
              e.preventDefault();
            }}
            sx={{
              "&:hover": {
                cursor: "auto",
              },
            }}
            disableRipple={true}
          >
            <RemoveRedEyeOutlinedIcon />
            <span>{blog?.post_views}</span>
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="success"
          onClick={(e) => {
            handleLikeAndDirect(e);
          }}
        >
          READ MORE
        </Button>
      </Stack>
    </Paper>
  );
};

export default BlogCard;
