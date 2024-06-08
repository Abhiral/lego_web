import React from "react";
import "./Cokkies.css";
function Cookies() {
  return (
    <div className="wrapper">
      <img src="#" alt="" />
      <div className="content">
        <header>Cookies Consent</header>
        <p>
          This website use cookies to ensure you get the best experience on our
          website.
        </p>
        <div className="buttons">
          <button className="item">Accept</button>
          <a href="#" className="item">
            Reject All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
