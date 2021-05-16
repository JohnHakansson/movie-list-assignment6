import React from "react";
import deleteImg from "./delete.png";
import starImg from "./star.png";
import "./Movie.css";

export default function Movie(props) {
  let stars = [];
  stars = addStars(props.movie.grade);

  return (
    <li className="list-group-item">
      {props.movie.title}
      <img
        src={deleteImg}
        className="float-end"
        onClick={() => {
          props.deleteMovie(props.movie.id);
        }}
        alt="delete"
      />
      {stars.map((item) => (
        <img
          key={item.valueOf()}
          src={starImg}
          className="float-end"
          alt="star"
        />
      ))}
    </li>
  );

  function addStars(grade) {
    let starsTemp = [];
    for (let i = 0; i < grade; i++) {
      starsTemp.push(i);
    }
    return starsTemp;
  }
}
