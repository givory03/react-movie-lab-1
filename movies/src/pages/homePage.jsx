import React, { useState, useEffect } from "react";
import MovieList from "../components/movieList";
import { Grid } from "@mui/material";
console.log("API Key:", import.meta.env.VITE_TMDB_KEY);


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("API Key:", import.meta.env.VITE_TMDB_KEY);  // Log the API key to confirm it's working

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Fetched Movies: ", json.results);  // Log fetched movies
        setMovies(json.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  if (error) return <div>Error: {error}</div>;  // Display error message if something went wrong

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>Loading movies...</p>
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;

