import React from "react";
import "./UseCase.css";
import CountDown from "../../utils/CountDown";
function UseCase() {
  return (
    <div id="UseCase" className="usecase row-padding">
      <h1>
        UseCase
        <br />
        <div className="soon">Launching Soon</div>
      </h1>
      <CountDown />
    </div>
  );
}

export default UseCase;
