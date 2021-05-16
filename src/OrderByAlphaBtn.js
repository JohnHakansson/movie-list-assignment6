import React from "react";

export default function OrderByAlphaBtn(props) {
  const orderByAlpha = () => {
    const sortedMovies = [...props.movies].sort((a, b) =>
      a.grade.localeCompare(b.grade)
    );
    props.setMovies(sortedMovies);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={orderByAlpha}>
      Alfabetisk Ordning
    </button>
  );
}
