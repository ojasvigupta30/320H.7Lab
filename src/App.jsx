import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

const apiKey = "98e3fb1f";

function App() {

   // State to hold movie data
   const [movie, setMovie] = useState(null);

   const getMovie = async(searchTerm) => {
    let response;
    
    try {

  response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}&plot=full`
  );

      const data = await response.json();
      setMovie(data);
    } catch(e) {
      console.error(e)
    }
  }


   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    const movies = `http://www.omdbapi.com/?apikey=${apiKey}&`
    const random = Math.floor(Math.random() * movies.length);
    getMovie(random);
  }, []);


  return (
    <>
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
    </>
  )
}

export default App
