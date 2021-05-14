import React from "react";

export default function OrderByAlphaBtn(props) {
  const orderByAlpha = () => {
    props.movies.sort((a, b) => a.grade.localeCompare(b.grade));
    props.setMovies(props.movies.filter((movie) => movie.id !== "1"));
    console.log(props.movies);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={orderByAlpha}>
      Alfabetisk Ordning
    </button>
  );
}
