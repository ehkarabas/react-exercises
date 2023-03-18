import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="flex justify-center flex-wrap ">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Favorites;
