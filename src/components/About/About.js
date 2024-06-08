import React from "react";
//import Team from "./Team";
import "./About.css";
//import Value from "./Value";

//import Today from "./Today";
//import Vision from "./Vision";
import VisionBlock from "./VisionBlock";
import NewTeamCard from "./NewTeamCard";

function About() {
  return (
    <div id="About" className="about row-padding">
      <VisionBlock />
      <NewTeamCard />
    </div>
  );
}

export default About;
