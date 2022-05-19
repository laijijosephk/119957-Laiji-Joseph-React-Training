import React from "react";

export default function Card(props) {
  console.log(props);
 
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top "
        src={props.movie.imgSrc}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title text-dark text-center">
          {props.movie.title}
        </h5>
        <p className="card-text text-dark text-center">{props.movie.text}</p>
      </div>
    </div>
  );
}
