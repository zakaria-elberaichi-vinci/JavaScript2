
import MovieCard from "./MovieCard";
import { Movie } from "../type";
import "./MovieListView.css";


interface MovieListViewProps {
  movies: Movie[];
}

const MovieListView = ({ movies }: MovieListViewProps) => {
  return (
    <div >
      <ul className="movie-list-view">
        {movies.map((film) => (
          <MovieCard key={film.title} movie={film} />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
