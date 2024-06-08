/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./New Team Card.css";

import { AiOutlineLinkedin } from "react-icons/ai";
export default function NewTeamCard() {
  return (
    <div id="team" className="founding-team team-members teams ">
      <h2>The Founding Team</h2>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img
              src="/assets/images/prinkan.png"
              className="team-img"
              alt="pic"
              loading="lazy"
            />
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/prinkan/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin color="white" fontSize={28} />
              </a>
            </div>
            <h3>Prinkan Pal</h3>
            <span>Chief Executive Officer</span>

            <p
              style={{
                fontSize: "17px",
                padding: "10px 10px 5px",
                textAlign: "justify",
                fontFamily: "Carlito",
              }}
            >
              Prinkan has led AI Engineering and Innovation for Analytics and
              Consulting companies. Built teams and businesses around multiple
              AI Products and Solutions. Helped global MNCs to scale AI led
              digital business models. Passionate about applying technological
              innovations
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img
              src="/assets/Icons/jaskaran (2).png"
              className="team-img"
              alt="pic"
              loading="lazy"
            />
            <div className="jasicon">
              <a
                href="https://www.linkedin.com/in/jaskaran-singh-879192a1/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin color="white" fontSize={28} />
              </a>
            </div>
            <div className="image-margin">
              <h3>Jaskaran Singh</h3>

              <span>Chief Artificial Intelligence Officer</span>

              <p
                style={{
                  fontSize: "17px",
                  padding: "10px 10px 5px",
                  textAlign: "justify",
                  fontFamily: "Carlito",
                }}
              >
                Jaskaran has built advanced AI Centre of Excellence for
                Analytics and Management consulting companies. Led team of data
                scientists to deliver production grade AI algorithms. Passionate
                about applying NLP, CV, Graph Networks to solve business
                problems
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="team-item">
            <img
              src="/assets/images/pradeep.png"
              className="team-img"
              alt="pic"
              loading="lazy"
            />
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/pradeep-p-5301aa49/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin color="white" fontSize={28} />
              </a>
            </div>
            <h3>Pradeep Patil</h3>

            <span>Chief Technology Officer</span>

            <p
              style={{
                fontSize: "17px",
                padding: "10px 10px 5px",
                textAlign: "justify",
                fontFamily: "Carlito",
              }}
            >
              Pradeep has been the Chief Architect of Data & AI Solutions for
              multiple fortune 500 companies. Led global teams of Data and ML
              architects in building Enterprise AI platforms. Passionate about
              building enterprise grade products using opensource software
            </p>
          </div>
        </div>
        {
          // <div className="col-sm-6 col-md-3">
          //   <div className="team-item">
          //     <img
          //       src="/assets/images/manan.png"
          //       className="team-img"
          //       alt="pic"
          //       loading="lazy"
          //     />
          //     <div className="icon">
          //       <a href="#" target="_blank" rel="noreferrer">
          //         <AiOutlineLinkedin color="white" fontSize={28} />
          //       </a>
          //     </div>
          //     <h3>Manan Pachnanda</h3>
          //     <span>Chief Product Officer</span>
          //     <p
          //       style={{
          //            fontSize: "18px",
          //         padding: "10px 10px 5px",
          //         textAlign: "justify",
          //         fontFamily: "Carlito",
          //       }}
          //     >
          //       Manan has helped Global Fortune 500 companies with their Data & AI
          //       Value Strategy. He has driven AI led transformation programs
          //       involving Product Design, Implementation and Adoption across
          //       Hi-Tech and Consumer industries. Passionate about AI User
          //       Experience Design.
          //     </p>
          //   </div>
          // </div>
        }
      </div>
    </div>
  );
}
