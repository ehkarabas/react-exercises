import { useEffect, useState } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { Stack } from "@mui/material";
import BlogCard from "../components/blog/BlogCard";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { blogList, likeCommentChange } = useSelector((state) => state.blog);
  const { getAllBlogsData } = useBlogCall();

  useEffect(() => {
    getAllBlogsData();
  }, [likeCommentChange]);

  // console.log(blogList);

  return (
    <>
      <Helmet>
        <title>BlogApp - Dashboard</title>
      </Helmet>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
        sx={{ minHeight: "70vh" }}
      >
        {blogList?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Stack>
    </>
  );
};

export default Dashboard;
