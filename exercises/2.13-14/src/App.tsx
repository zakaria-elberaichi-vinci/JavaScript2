import { useEffect, useState } from 'react'
import './App.css'


interface Joke {
  joke : string ; 
  category : string;
}

function App() {

  const [joke,setJoke] = useState<Joke |undefined>(undefined);

  const fetchJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });
  };

  useEffect(() => {
    fetchJoke();
    setInterval(fetchJoke, 10000);
  }, []);

  if (!joke) {
    return <p>Loading...</p>;
  }
  return (
      <>
      <p>The joke's category is {joke.category}</p>
      <p>{joke.joke}</p>
      </>
  )
}

export default App
