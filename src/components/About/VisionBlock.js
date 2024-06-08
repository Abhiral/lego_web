/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Vision.css";
function VisionBlock() {
  return (
    <div id="ourvision" className="our-vision row-padding">
      <h2 style={{ marginTop: "-25px", width: "100%" }}>Our Vision</h2>
      <div className="vision-container row">
        <div className="vision-left col-lg-5">
          <h2 style={{ marginTop: "68px", fontSize: "42px" }}>
            Weave your AI dreams
          </h2>
          <h2 style={{ marginTop: "-1px", fontSize: "42px" }}>to reality.</h2>
          <p style={{ width: "344px", marginTop: "16px", fontSize: "25px" }}>
            We harness tribal intelligence of humans, augment using technology
            to make the world a better place.
          </p>
        </div>

        <div className="vision-right col-lg-7">
          <div className="goverance">AI Governance</div>
          <div className="divide">
            <div className="design">AI Experience Design</div>
            <div className="product">AI - as - a - Product</div>
          </div>
          <div className="modern">
            AI for Data Modernization
            <div className="tick-m">
              <img src="/assets/Icons/bluetick.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="tick">
        <img src="/assets/Icons/bluetick.png" alt="" />
        <h4>Current Focus</h4>
      </div>
    </div>
  );
}

export default VisionBlock;
