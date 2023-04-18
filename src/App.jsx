import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import axios from "axios";

export default function App() {
  const TMDB_API =
    "https://api.themoviedb.org/3/movie/popular?api_key=6daee083042ddbd1b03f1968f39ba535";
  const TMDB_API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=6daee083042ddbd1b03f1968f39ba535&query=";
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(TMDB_API)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(TMDB_API_SEARCH + term).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <>
      <h1 className="text-center text-white font-semibold text-4xl mt-5 mb-5 animate-pulse">
        Popular Movies
      </h1>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSearch}
      >
        <input
          className="outline-none rounded-md border border-white w-[50%] px-5 text-2xl text-[#032541]"
          placeholder="Search Movie"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          className="bg-white mx-2 px-5 py-1 rounded-md text-lg text-[#032541] hover:bg-gray-400 transition-all duration-500"
          onSubmit={handleSearch}
        >
          Search
        </button>
      </form>
      <div className="flex flex-wrap items-center justify-center m-10">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
