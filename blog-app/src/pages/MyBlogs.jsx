import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import useBlogCall from "../hooks/useBlogCall";
import MyBlogsBlogCard from "../components/blog/MyBlogsBlogCard";
import { Helmet } from "react-helmet";

const MyBlogs = () => {
  const { getUserBlogsData } = useBlogCall();
  const { userBlogs: userBlogsStore } = useSelector((state) => state.blog);
  const [userBlogs, setUserBlogs] = useState(userBlogsStore);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserBlogsData();
      setUserBlogs(data);
    };
    fetchData();
  }, []);

  // console.log(userBlogs);

  const isSingle = userBlogs.length <= 1;

  return (
    <>
      <Helmet>
        <title>BlogApp - User Blogs</title>
      </Helmet>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{ minHeight: "70vh" }}
      >
        {userBlogs.map((userBlog, index) => (
          <MyBlogsBlogCard
            userBlog={userBlog}
            isSingle={isSingle}
            key={`userblog-${index}`}
          />
        ))}
      </Stack>
    </>
  );
};

export default MyBlogs;
