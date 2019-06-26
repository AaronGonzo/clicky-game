import React from "react";
import "./style.css";
import "react-sticky-header/styles.css";

function Header(props) {
  return (
    <div>
      <ul className="list">
        <li className="header-link">Clicky Game</li>
        <li className="header-link">You WIN!</li>
        <li className="header-link">
          Score: {props.score} | Highscore: {props.highscore}
        </li>
      </ul>
    </div>
  );
}

export default Header;
