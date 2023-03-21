import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
};

// ! rxslice ile hizlica slice yapisi kurulabilir.

export const getNews = createAsyncThunk(
  "getNews", // ? action type olusturuluyor
  // ? payload creator -> bu ornek icin async callback function -> async request yapacak
  async (thunkAPI, { rejectWithValue }) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
    try {
      const { data } = await axios(url);
      console.log(data);
      return data.articles;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        `Error ${error.response.status} : ${error.message}`
      );
    }
  }
);

// type argument of 'users/requestStatus' will generate these action types:

// pending: 'users/requestStatus/pending'
// fulfilled: 'users/requestStatus/fulfilled'
// rejected: 'users/requestStatus/rejected'

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  // ? API istekleri icin extraReducers ornegi
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
