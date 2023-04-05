import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    loading: false,
    blogList: [],
    categories: [],
    error: false,
    likeCommentChange: false,
    commentsToggle: false,
    userBlogs: [],
  },

  reducers: {
    // blog/fetchStart
    fetchStart: (state) => {
      state.loading = true;
    },
    // blog/getPostBlogSuccess
    blogSuccess: (state, { payload }) => {
      state.blogList = payload;
      state.error = false;
      state.loading = false;
    },
    // blog/getPostCategorySuccess
    categorySuccess: (state, { payload }) => {
      state.categories = payload;
      state.error = false;
      state.loading = false;
    },
    // blog/getPostBlogFail
    blogFail: (state, { payload }) => {
      state.blogList = [];
      state.error = payload;
      state.loading = false;
    },
    // blog/getPostCategoryFail
    categoryFail: (state, { payload }) => {
      state.categories = [];
      state.error = payload;
      state.loading = false;
    },
    // blog/likeCommentChange
    likeCommentChange: (state) => {
      state.likeCommentChange = !state.likeCommentChange;
      state.error = false;
      state.loading = false;
    },
    // blog/toggleComments
    toggleComments: (state, { payload }) => {
      state.commentsToggle = payload ?? !state.commentsToggle;
    },
    // blog/draftBlogsSuccess
    userBlogsSuccess: (state, { payload }) => {
      state.userBlogs = payload;
    },
  },
});

export const {
  fetchStart,
  blogSuccess,
  categorySuccess,
  blogFail,
  categoryFail,
  likeCommentChange,
  toggleComments,
  userBlogsSuccess,
} = blogSlice.actions;
export default blogSlice.reducer;
