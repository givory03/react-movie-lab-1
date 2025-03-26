import React, { useState, useEffect } from "react";
import MovieList from "../components/movieList";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import FilterCard from "../components/filterMoviesCard";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Fetched Movies: ", json.results);
        setMovies(json.results);
      } catch (err) {
        console.error("Error fetching movies: ", err);
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  console.log("Movies Array: ", movies);  // Debugging line

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "20px" }}>
          <FilterCard />
        </Grid>
        <MovieList movies={movies} />
      </Grid>
    </Grid>
  );
};

export default HomePage;


