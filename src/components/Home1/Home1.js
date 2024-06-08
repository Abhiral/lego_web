import React from "react";

import "./Home1.css";
export default function Home1() {
  return (
    <div id="Home1" className="usecase row-padding">
      <div className="usecase----container row">
        <div className="rectangle-list col-lg-5">
          <div className="usecase-text">
            <p>
              AI augmenting data teams and accelerating implementation of AI use
              cases
            </p>
          </div>
          <div className="rectangle-first">
            <p>Data Modeler</p>
            <div className="in-circle">
              <img src="/assets/Icons/It.png" alt="Data Modeler" />
              <div className="datab">
                <img
                  src="/assets/Icons/database.png"
                  alt="Data Modeler"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="rectangle-second">
            <p>Data Steward</p>
            <div className="in-circle1">
              <img src="/assets/Icons/st.png" alt="Data Steward" />
              <div className="db">
                <img src="/assets/Icons/db.png" alt="Data Steward" />
              </div>
            </div>
          </div>

          <div className="rectangle-third">
            <p>Data Enginner</p>
            <div className="in-circle2">
              <img src="/assets/Icons/dataeng.png" alt="Data Enginner" />
            </div>
          </div>
        </div>
        <div className="home-text-section-right col-lg-7">
          <div className="home-text-section-image">
            <img
              src="assets/images/AI_for_Data_Modernization.png"
              alt="AI for Data Modernization"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
