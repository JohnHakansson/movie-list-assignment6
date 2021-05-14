import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import Movies from "./Movies";
import Movie from "./Movie";
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

  // const orderByAlphabet = () => {
  //   movies.sort((a, b) => a.grade.localeCompare(b.grade));
  //   setMovies(movies.filter((movie) => movie.id !== "1"));
  // };

  // const orderByGrade = () => {
  //   movies.sort((a, b) => b.grade.localeCompare(a.grade));
  //   setMovies(movies.filter((movie) => movie.id !== "1"));
  // };

  return (
    <div className="container">
      <AddMovieForm movies={movies} setMovies={setMovies} />
      {/* <ul>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
        ))}
      </ul> */}
      <Movies movies={movies} deleteMovie={deleteMovie} />
      {/* <button
        type="button"
        className="btn btn-primary"
        onClick={orderByAlphabet}
      >
        Alfabetisk Ordning
      </button> */}

      <OrderByAlphaBtn movies={movies} setMovies={setMovies} />
      {/* <button type="button" className="btn btn-primary" onClick={orderByGrade}>
        Betygsordning
      </button> */}
      <OrderByGradeBtn movies={movies} setMovies={setMovies} />
    </div>
  );
}
