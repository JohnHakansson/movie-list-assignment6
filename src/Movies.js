import React from "react";
import Movie from "./Movie";

export default function Movies(props) {
  return (
    <div>
      <ul className="list-group">
        {props.movies.map((movie) => (
          <Movie key={movie.id} movie={movie} deleteMovie={props.deleteMovie} />
        ))}
      </ul>
    </div>
  );
}
