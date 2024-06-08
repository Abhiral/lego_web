import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";

import Home1 from "./components/Home1/Home1";
import Contact from "./components/Contact2/Contact";

import SmoothScroll from "smooth-scroll";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import OntoQl from "./components/OntoQl/OntoQl";
import OntoSphere from "./components/OntoSphere/OntoSphere";

import Ontocraft from "./components/Ontocraft/Ontocraft";
import Archi from "./components/Arcit/Archi";
import VisionBlock from "./components/About/VisionBlock";
import NewTeamCard from "./components/About/NewTeamCard";

import ScrollToTop from "./components/home/ScrollToTop";

import BannerVideo from "./components/home/BannerVideo";

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: false,
});

const url = "http://legoai.com/assets/recording1.mov";

export default function App(props) {
  const isConsent = getCookieConsentValue();
  const [isHidden, setIsHidden] = useState(false);

  React.useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // If the user has scrolled past the navbar section, hide the navbar
      if (window.scrollY > window.innerHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    // Attach the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        let elem = document.getElementById(window.location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ behavior: "smooth" });
      }
    }, 1000);
  }, []);

  return (
    <div
      className="main-container container-fluid"
      style={{
        height: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <div className="panel">
        <div
          style={{
            display: isHidden ? "none" : "block",
            minHeight: "60px",
          }}
        >
          <Header />
        </div>
        <BannerVideo video={url} />
      </div>
      <div className="panel">
        <Home />
      </div>

      <div className="panel">
        <Home1 />
      </div>
      <div className="panel">
        <Ontocraft />
      </div>
      <div className="panel">
        <OntoSphere />
      </div>
      <div className="panel">
        <OntoQl />
      </div>
      <div className="panel">
        <Archi />
      </div>
      <div className="panel">
        <VisionBlock />
      </div>
      <div className="panel">
        <NewTeamCard />
      </div>

      <div className="panel">
        <Contact />
        <Footer />

        {isConsent ? null : (
          <CookieConsent
            location="bottom"
            buttonText="Got it!!"
            cookieName="LegoAi"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
          </CookieConsent>
        )}
      </div>
      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}
