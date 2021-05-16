import React from "react";

export default function OrderByGradeBtn(props) {
  const orderByGrade = () => {
    const sortedMovies = [...props.movies].sort((a, b) =>
      b.grade.localeCompare(a.grade)
    );
    props.setMovies(sortedMovies);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={orderByGrade}>
      Betygsordning
    </button>
  );
}
