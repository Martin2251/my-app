import React from "react";

function CardTitle(props) {
  return (
    <p>
      {props.firstName} {props.lastName}
    </p>
  );
}

export default CardTitle;
