import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid2";

const MovieList = ({ movies }) => {
  if (!movies || !Array.isArray(movies)) {
    return <div>No movies available to display.</div>;
  }

  return (
    <Grid container>
      {movies.map((m) => (
        <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: "20px" }}>
          <Movie movie={m} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
