import React from "react";
import "./Gov.css";
import Slider from "react-slick";
import Topology from "./Topology";
import "./Onto.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import OntoSphere from "../OntoSphere/OntoSphere";
function Goverance(props) {
  const slidesData = [
    { type: "component", component: <Topology /> },
    {
      type: "image",
      imageUrl: "/assets/images/AI_Augmented_Data_Consumer_Hub.png",
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToSroll: 1,
  };
  return (
    <div className="Goverance row-padding">
      <div className="sphere-logo">
        <img
          src="/assets/images/OntoSphereLogo.png"
          alt="OntoSphereLogo,AI Augmented Data Consumer Hub"
          loading="lazy"
        />
        <h2> AI Augmented Data Consumer Hub</h2>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          if (slide.type === "component") {
            return <div key={index}>{slide.component} </div>;
          } else if (slide.type === "image") {
            return (
              <div className="slide-img row-padding" key={index}>
                {" "}
                <img src={slide.imageUrl} alt="OntoSphere" loading="lazy" />
              </div>
            );
          }
          return null;
        })}
      </Slider>
    </div>
  );
}

export default Goverance;
