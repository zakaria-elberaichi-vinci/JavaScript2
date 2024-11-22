
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";
import PageTitle from "../PageTitle";


const HomePage = () => {
  return (
   <div>
    const {movies} : MovieContext = useOutletContext();
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>

    
    <MovieTitleList movies={movies}/>
    </div>
    </div>
  );
};
export default HomePage;
