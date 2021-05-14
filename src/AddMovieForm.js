import React, { useRef } from "react";

export default function AddMovieForm(props) {
  const titleRef = useRef();
  const gradeRef = useRef();
  const movies = props.movies;

  const addMovie = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const grade = gradeRef.current.value;

    if (title === "") {
      alert("Du måste ange en titel för att kunna spara filmen");
      return false;
    }

    if (grade === "0") {
      alert("Du måste ange ett betyg för att kunna spara filmen");
      return false;
    }

    let highestId;
    //  = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

    if (movies.length > 0) {
      highestId = movies[movies.length - 1].id + 1;
    } else {
      highestId = 1;
    }

    props.setMovies([
      ...movies,
      {
        id: highestId,
        title: titleRef.current.value,
        grade: gradeRef.current.value,
      },
    ]);

    titleRef.current.value = "";
    gradeRef.current.value = "0";
  };

  return (
    <div>
      <h1>Min filmlista</h1>
      <form id="add-movie" onSubmit={addMovie}>
        <fieldset>
          <legend>Lägg till en film</legend>
          <label htmlFor="title">Titel:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Skriv filmens namn"
            ref={titleRef}
          />

          <label htmlFor="rating">Betyg:</label>

          <select
            type="text"
            id="rating"
            className="form-control"
            ref={gradeRef}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            className="btn btn-success mt-3"
            value="Spara film"
          />
        </fieldset>
      </form>
    </div>
  );
}
