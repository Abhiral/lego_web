/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./OntoSphere.css";
import WranglerSlider from "../Stepper/WranglerSlider";
const _data = {
  poster:
    "http://20.219.8.127:3000/assets/images/AI_for_Data_Modernization.png",
  title: (
    <div className="sphere-logo">
      <img
        src="http://legoai.com/assets/images/Ontosphere_logo.svg"
        alt="OntoSphereLogo,AI Augmented Data Consumer Hub"
        loading="lazy"
      />
      <h2> AI Augmented Data Consumer Hub</h2>
    </div>
  ),
  slides: [
    {
      title: "EXPLORE",
      desc: "Data Products catalogue to explore & search data ontologies",

      src: "http://legoai.com/assets/ontosphere_marketplace.mp4",
    },
    {
      title: "SELECT",
      desc: "No code / low code interface to build anaytical data model",

      src: "http://legoai.com/assets/ontosphere_ontology.mp4",
    },
    {
      title: "REVIEW",
      desc: "Examine data profiling metrics and summary statistics",
      src: "http://legoai.com/assets/ontosphere_mycart.mp4",
    },
    {
      title: "SERVE",
      desc: "Data Monetization model to serve data on demand",
      src: "http://legoai.com/assets/ontosphere_checkout.mp4",
    },
  ],
};

function OntoSphere(props) {
  return <WranglerSlider data={_data} />;
}

export default OntoSphere;
