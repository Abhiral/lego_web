/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div id="home" className="main-home-container row-padding">
      <header className="main header">
        <div className="home--container row">
          <div className="home-text-section-left col-lg-5">
            <h2>AI for Data Modernization. </h2>
            <p>
              We all know the importance for data for AI, here is our take on
              how AI can do it’s bit in augmenting the intelligence of different
              stakeholders in the value chain of building scalable and
              sustainable data platforms.
            </p>

            {
              // <div className="btn-cover">
              //   <button className="btn-getStarted">Get Started</button>
              // </div>
            }
          </div>
          <div className="home-text-section-right col-lg-7">
            <div className="home-text-section-image">
              <img
                src="/assets/images/AI_for_Data_Modernization.png"
                alt="AI for Data Modernization"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
