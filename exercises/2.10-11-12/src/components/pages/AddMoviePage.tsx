import { useNavigate, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import PageTitle from "../PageTitle";
import AddMovieForm from "../AddMovieForm";


const AddMoviePage = () => {

        const { onMovieAdded }: MovieContext = useOutletContext();

      return(

          <div>
            <PageTitle title="Ajouter un film"/>
            <AddMovieForm onMovieAdded={onMovieAdded}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        );
      };
      


export default AddMoviePage;