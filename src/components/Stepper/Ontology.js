import React, { useState } from "react";
import "./Onto.css";
//ontocraft
function Ontology() {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="OntoCraft" className="row">
      <div className="d-flex align-items-start tabs-outer-cover">
        <div
          className="nav flex-column nav-pills me-3 tabs-cover"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Define
            <span>
              Logical grouping of data assets using algorithmic technique
            </span>
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            design
            <span>
              Logical grouping of data assets using clustering technique
            </span>
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            transform
            <span>
              Logical grouping of data assets using clustering technique
            </span>
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Explore
            <span>
              Logical grouping of data assets using clustering technique
            </span>
          </button>
        </div>

        <div
          className="tab-content"
          id="v-pills-tabContent"
          style={{ flex: 1 }}
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source
                  src="http://legoai.com/assets/recording1.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source
                  src="http://legoai.com/assets/recording2.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source
                  src="http://legoai.com/assets/recording1.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
            <div className="video-container">
              <video autoPlay loop muted playsInline>
                <source
                  src="http://legoai.com/assets/recording1.mov"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ontology;
