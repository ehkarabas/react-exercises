import { useLocation, useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect, useState } from "react";
import DetailsBlogCard from "../components/blog/DetailsBlogCard";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { getBlogData } = useBlogCall();
  const [detailBlog, setDetailBlog] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(useLocation());
  // console.log(id, state);

  // - re-render on modifying blog, comments and likes
  const onDataChange = async () => {
    const data = await getBlogData(id);
    setDetailBlog(data);
  };

  // - initial optimized state building and allowing direct url access
  useEffect(() => {
    if (state?.dashboardBlogDetail) {
      setDetailBlog(state?.dashboardBlogDetail);
    } else if (state?.userBlogDetail) {
      setDetailBlog(state?.userBlogDetail);
    } else {
      const fetchBlogData = async () => {
        const data = await getBlogData(id);
        setDetailBlog(data);
      };
      fetchBlogData();
    }
  }, []);

  // console.log(detailBlog);

  return (
    <>
      <Helmet>
        <title>BlogApp - Detail</title>
      </Helmet>

      <DetailsBlogCard
        detailBlog={detailBlog}
        onDataChange={onDataChange}
        sx={{ margin: "auto !important" }}
      />
    </>
  );
};

export default Detail;
