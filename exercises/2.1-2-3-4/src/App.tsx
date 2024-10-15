import './App.css'

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";
  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <PageTitle title={pageTitle} />


      <Cinema
        name={cinema1Name}
        movie1Title={cinema1Movie1Title}
        Movie1Director = {cinema1Movie1Director}
        Movie2Title={cinema1Movie2Title}
        Movie2Director = {cinema1Movie2Director}
      />

      <Cinema
        name={cinema2Name}
        movie1Title={cinema2Movie1Title}
        Movie1Director = {cinema2Movie1Director}
        Movie2Title={cinema2Movie2Title}
        Movie2Director = {cinema2Movie2Director}
        
      />
    </div>
  );
};


interface PageProps{
  title : string;
}
const PageTitle = (props : PageProps) => {
  return(
   
      <h1>{props.title}</h1>
  
  )
}

interface CinemaProps {
name : string;
movie1Title : string;
Movie1Director : string;
Movie2Title : string;
Movie2Director : string;
}

const Cinema = (props : CinemaProps) =>{
return(
<div>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <strong>{props.movie1Title}</strong> - Réalisateur :{" "}
            {props.Movie1Director}
          </li>
          <li>
            <strong>{props.Movie2Title}</strong> - Réalisateur :{" "}
            {props.Movie2Director}
          </li>
        </ul>
      </div>
  )


}


  
  


export default App;
