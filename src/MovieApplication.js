import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movies from "./Movies";
import "./MovieApplication.css";
import OrderByAlphaBtn from "./OrderByAlphaBtn";
import OrderByGradeBtn from "./OrderByGradeBtn";

export default function MovieApplication() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Star Wars",
      grade: "5",
    },
  ]);

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container">
      <AddMovieForm movies={movies} setMovies={setMovies} />

      <Movies movies={movies} deleteMovie={deleteMovie} />

      <OrderByAlphaBtn movies={movies} setMovies={setMovies} />
      <OrderByGradeBtn movies={movies} setMovies={setMovies} />
    </div>
  );
}
