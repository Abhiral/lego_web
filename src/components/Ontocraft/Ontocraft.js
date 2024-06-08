/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Ontocraft.css";
import WranglerSlider from "../Stepper/WranglerSlider";
const _data = {
  poster:
    "http://20.219.8.127:3000/assets/images/AI_for_Data_Modernization.png",
  title: (
    <div className="onto-logo">
      <img
        src="http://legoai.com/assets/images/Ontocraft_logo.svg"
        alt="OntoCraft,AI Augmented Data Product Studio"
        loading="lazy"
      />
      <h2>AI Augmented Data Product Studio</h2>
    </div>
  ),
  slides: [
    {
      title: "DEFINE",
      desc: "Logical Grouping of Data Assets Using Algorithmic Technique",
      src: "http://legoai.com/assets/Ontocraft_topology.mp4 ",
    },
    {
      title: "DESIGN",
      desc: "Logical grouping of data assets using clustering technique",

      src: "http://legoai.com/assets/Ontocraft_ontology.mp4",
    },
    {
      title: "TRANFORM",
      desc: "Logical grouping of data assets using clustering technique",
      src: "http://legoai.com/assets/Ontocraft_wrangler.mp4",
    },
    {
      title: "PUBLISH",
      desc: "Logical grouping of data assets using clustering technique",
      src: "http://legoai.com/assets/Ontocraft_governance.mp4",
    },
  ],
};

function Ontocraft(props) {
  return <WranglerSlider data={_data} />;
}

export default Ontocraft;
