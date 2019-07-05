import React from "react";
import "./style.css";

function Title(props) {
  return <>
    <div className="jumbotron jumbotron-fluid text-center">
      <h1>Clicky Game!</h1><br />
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
  </>;
}

export default Title;
