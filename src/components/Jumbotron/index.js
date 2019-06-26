import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <br />
      <br />
      <header className="header">
        <h1>Soccer Clicky Game!</h1>
        <h3>
          Click on an image to earn points, but don't click on any more than
          once!
        </h3>
      </header>
    </div>
  );
}

export default Jumbotron;
