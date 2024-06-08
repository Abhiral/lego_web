import React, { useState, useEffect } from "react";
import Topology from "./Topology";
import OntoLogy from "./Ontology";
import Wrangler from "./Wrangler";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Goverance from "./Goverance";

import "./Stepper.css";
const MainData = [
  {
    id: 1,

    name: "DEFINE",
    desc: "Logical grouping of data assets using clustering technique",
    video_url: "/assets/video/video.mp4",
    image: "/assets/images/AI_Augmented_Data_Product_Studio.png",
  },

  {
    id: 2,

    name: "DESIGN",
    desc: "Logical grouping of data assets using clustering technique",
    video_url: "/assets/video/video.mp4",
    image: "/assets/images/AI_Augmented_Data_Product_Studio.png",
  },

  {
    id: 3,

    name: "TRANSFORM",
    desc: "Logical grouping of data assets using clustering technique",
    video_url: "/assets/video/video.mp4",
    image: "/assets/images/AI_Augmented_Data_Product_Studio.png",
  },
  {
    id: 4,

    name: "EXPLORE",
    desc: "Logical grouping of data assets using clustering technique",
    video_url: "/assets/video/video.mp4",
    image: "/assets/images/AI_Augmented_Data_Product_Studio.png",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "200px",
    marginRight: "800px",
  },
}));
function MainStepper(props) {
  const [currentStep, setCurrentStep] = useState(1);
  //   const classes = useStyles();
  //   const [data, setData] = React.useState(MainData);
  //   console.log(data[0]);
  //   const [step, setStep] = React.useState(0);
  //   const step_handler = (_step) => {
  //     if (_step.toLowerCase() === "next") {
  //       setStep(step + 1);
  //     } else if (_step.toLowerCase() === "back") {
  //       setStep(step - 1);
  //     }
  //   };
  //   const handleNext = () => {
  //     setStep((prevActiveStep) => prevActiveStep + 1);
  //   };

  //   const handleBack = () => {
  //     setStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  //   const step_mapper = {
  //     0: <Topology data={data[0]} step={step} step_handler={step_handler} />,
  //     1: <OntoLogy data={data[1]} step={step} step_handler={step_handler} />,

  //     2: <Wrangler data={data[2]} step={step} step_handler={step_handler} />,
  //     3: <Goverance data={data[3]} step={step} step_handler={step_handler} />,
  //   };
  //   return (
  //     <div className={classes.root}>
  //       <Topology data={data} />
  //     </div>
  //   );
  // }
  useEffect(() => {}, [currentStep]);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="bundle">
      <div className="bundle-wrap">
        <div className="vertical-stepper">
          <div className={`step ${currentStep === 1 ? "active " : ""}`}>
            <div className="step-title">DEFINE</div>
            <div className="step-content">
              <p>Logical grouping of data assets using clustering technique</p>
            </div>
            <video autoPlay loop muted playsInline>
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.720p.webm"
                //   src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={`step ${currentStep === 2 ? "active" : ""}`}>
            <div className="step-title" onClick={handleNextStep}>
              DESIGN
            </div>
            <div className="step-content">
              <p>Logical grouping of data assets using clustering technique</p>
            </div>
          </div>
          <div
            onClick={handleNextStep}
            className={`step ${currentStep === 3 ? "active" : ""}`}
          >
            <div className="step-title">TRANSFORM</div>
            <div className="step-content">
              <p>Logical grouping of data assets using clustering technique</p>
            </div>
          </div>
          <div
            onClick={handleNextStep}
            className={`step ${currentStep === 4 ? "active" : ""}`}
          >
            <div className="step-title">EXPLORE</div>
            <div className="step-content">
              {" "}
              <p>Logical grouping of data assets using clustering technique</p>
            </div>
          </div>
        </div>

        {/* <div className="step-navigation">
    <button onClick={handlePrevStep} disabled={currentStep === 1}>
      Prev
    </button>
    <button onClick={handleNextStep} disabled={currentStep === 4}>
      Next
    </button>
  </div> */}
        <div className="right">
          <div class="video-container">
            <video autoPlay loop muted playsInline>
              <source
                src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.720p.webm"
                //   src="http://techslides.com/demos/sample-videos/small.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <button onClick={handleNextStep}>Next-icon-slider</button>
    </div>
  );
}

export default MainStepper;
