import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const movieContext = createContext();
const { Provider: MovieProvider } = movieContext;

export const useMovieContext = () => {
  return useContext(movieContext);
};

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios(API)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addToFavorites = (movie) => {
    let isFavorite = favorites.some((item) => item.id === movie.id);
    if (isFavorite) {
      let newFavorites = favorites.filter((item) => item.id !== movie.id);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      let newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  console.log(movies);

  const values = { getMovies, movies, loading, addToFavorites, favorites }; // - bu sekilde kullanildiginda ayni isimle key'i otomatik olusturur

  return <MovieProvider value={values}>{children}</MovieProvider>;
};

export default MovieContextProvider;
