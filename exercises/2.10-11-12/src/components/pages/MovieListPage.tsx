import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { Movie } from "../../types";

const MovieListPage = () => {
  const defaultMovies: Movie[] = [
    {
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 18.7,
    },
    {
      title: "The Meyerowitz Stories",
      director: "Noah Baumbach",
      duration: 112,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
      description:
        "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
      title: "her",
      director: "Spike Jonze",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      budget: 23,
    },
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const onMovieAdded = (newMovie: Movie) => {
    console.log("Movie to add:", newMovie);
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <PageTitle title="My favorites Movies"/>

      <MovieListView movies={movies} />

      <AddMovieForm onMovieAdded={onMovieAdded} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
