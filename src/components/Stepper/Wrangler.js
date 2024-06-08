import React from "react";
import Slider from "react-slick";
import Ontology from "./Ontology";
import "./Onto.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import OntoCraft from "../OntoCraft/OntoCraft";
//import OntoQl from "../OntoQl/OntoQl";

function Wrangler(props) {
  const slidesData = [
    { type: "component", component: <Ontology /> },
    {
      type: "image",
      imageUrl: "/assets/images/AI_Augmented_Data_Product_Studio.png",
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
    <div id="OntoCraft-slide" className="Wrangler">
      <div className="onto-logo">
        <img
          src="/assets/images/OntoCraftLogo.png"
          alt="OntoCraft,AI Augmented Data Product Studio"
          loading="lazy"
        />
        <h2>AI Augmented Data Product Studio</h2>
      </div>
      <Slider {...settings}>
        {slidesData.map((slide, index) => {
          if (slide.type === "component") {
            return <div key={index}>{slide.component} </div>;
          } else if (slide.type === "image") {
            return (
              <div className="slide-img row-padding" key={index}>
                {" "}
                <img
                  src={slide.imageUrl}
                  alt="OntoCraft,AI Augmented Data Product Studio"
                  loading="lazy"
                />
              </div>
            );
          }
          return null;
        })}
      </Slider>
    </div>
  );
}

export default Wrangler;
