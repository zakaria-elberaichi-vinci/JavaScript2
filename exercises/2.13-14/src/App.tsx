import { useEffect, useState } from 'react'
import './App.css'


interface Joke {
  joke : string ; 
  category : string;
}

function App() {

  const [joke,setJoke] = useState<Joke |undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((data) => setJoke(data))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  if(!joke) {
    return <p>Loading ...</p>
  }

  return (
      <>
      <p>The joke's category is {joke.category}</p>
      <p>{joke.joke}</p>
      </>
  )
}

export default App
