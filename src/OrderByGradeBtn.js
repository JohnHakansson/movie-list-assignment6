import React from "react";

export default function OrderByGradeBtn(props) {
  const orderByGrade = () => {
    props.movies.sort((a, b) => b.grade.localeCompare(a.grade));
    props.setMovies(props.movies.filter((movie) => movie.id !== "1"));
    console.log(props.movies);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={orderByGrade}>
      Betygsordning
    </button>
  );
}
