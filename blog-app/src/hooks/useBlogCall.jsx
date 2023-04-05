import { useDispatch, useSelector } from "react-redux";
import useAxios from "./useAxios";
import {
  blogFail,
  blogSuccess,
  categoryFail,
  categorySuccess,
  fetchStart,
  likeCommentChange,
  toggleComments,
  userBlogsSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAuthCall from "./useAuthCall";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  let currentUser = useSelector((state) => state.auth);
  // console.log(currentUser.id);

  // const navigate = useNavigate();

  const getAllBlogsData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`api/blogs/`);
      // console.log("blogs: ", data);
      dispatch(blogSuccess(data));
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const getBlogData = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/blogs/${id}/`);
      // console.log(`${id}. blog:`, data);
      return data;
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const postBlogData = async (blogData) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/blogs/`, blogData);
      getAllBlogsData();
      toastSuccessNotify(`Blog posted successfully.`);
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const editBlogData = async (id, editedBlogData) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`api/blogs/${id}/`, editedBlogData);
      getBlogData(id);
      toastSuccessNotify(`Blog posted successfully.`);
      // return getBlogData(id);
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const deleteBlogData = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/blogs/${id}/`);
      getAllBlogsData();
      toastSuccessNotify(`Blog deleted successfully.`);
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const getUserBlogsData = async () => {
    dispatch(fetchStart());
    // console.log(currentUser);
    try {
      const { data } = await axiosWithToken(
        `api/blogs/?author=${currentUser?.id}`
      );
      dispatch(userBlogsSuccess(data));
      return data;
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const getBlogCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/categories/`);
      dispatch(categorySuccess(data));
      return data;
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(categoryFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const likeCreate = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/likes/${id}/`);
      const data = getBlogData(id);
      dispatch(likeCommentChange());
      return data;
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const commentCreate = async (id, comment) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/comments/${id}/`, comment);
      const data = getBlogData(id);
      dispatch(likeCommentChange());
      return data;
    } catch (error) {
      const err = `Error ${error.response.status}: ${
        error.response?.data[Object.keys(error.response?.data)[0]]
      }`;
      dispatch(blogFail(err));
      toastErrorNotify(err);
      // console.log(err);
    }
  };

  const commentsToggler = (bool) => {
    dispatch(toggleComments(bool));
  };

  return {
    getAllBlogsData,
    getBlogData,
    postBlogData,
    editBlogData,
    deleteBlogData,
    getBlogCategories,
    likeCreate,
    commentCreate,
    commentsToggler,
    getUserBlogsData,
  };
};

export default useBlogCall;
