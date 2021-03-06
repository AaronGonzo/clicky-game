import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="card">
      <img
        className="photos"
        onClick={props.imageClick}
        alt={props.name}
        src={props.image}
      />
    </div>
  );
}

export default PlayerCard;
