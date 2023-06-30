import React from "react";

import "../styles/Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgSrc} alt={props.name} />

        <h1>{props.name}</h1>
        <p>{props.count}</p>
        <p>{props.price}</p>
      </div>
    </>
  );
}

export default Card;
