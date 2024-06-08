/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Community.css";
import CountDown from "../../utils/CountDown";
function Community() {
  return (
    <div id="Community" className="Community row-padding">
      <h1>
        Community
        <br />
        <div className="soon">Launching Soon</div>
      </h1>
      <CountDown />
    </div>
  );
}

export default Community;
