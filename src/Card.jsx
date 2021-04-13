import React from "react";
import CardTitle from "./CardTitle";

function Card(props) {
  return (
    <div className="card_container">
      <CardTitle
        firstName={props.firstName}
        lastName={props.lastName}
      ></CardTitle>

      <p>
        tech stack : {props.language}, {props.framework}
      </p>
    </div>
  );
}

export default Card;
