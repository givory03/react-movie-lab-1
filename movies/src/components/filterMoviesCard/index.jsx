import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from "../../images/pexels-dziana-hasanbekava-5480827.jpg";  // Ensure the correct image path

const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)"
};

const FilterCard = (props) => {
  const genres = [
    { id: "0", name: "All" },
    ...props.genres  // Add dynamically fetched genres
  ];

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);  // Call the parent's handleChange function
  };

  return (
    <Card sx={{ backgroundColor: "rgb(204, 204, 0)" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" /> Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={(e) => handleChange(e, "name", e.target.value)}  // Handle title filter change
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={(e) => handleChange(e, "genre", e.target.value)}  // Handle genre filter change
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={img} title="Filter" />
    </Card>
  );
};

export default FilterCard;

