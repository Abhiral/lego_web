/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { team } from "./teamdata";
//import "./About.css";
import { AiOutlineLinkedin } from "react-icons/ai";
const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
          <div className="team-img">
            <img src={val.cover} alt="" />
          </div>
          <div className="details">
            <a href="#">
              <AiOutlineLinkedin color="#0077B5" fontSize={28} />
            </a>
            <h2>{val.name}</h2>
            <p className="functional-title">{val.work}</p>
            <p
              style={{
                fontSize: "12px",
                margin: "0 -30px",
                padding: "10px 10px 5px",
                textAlign: "justify",
                backgroundColor: "#efefef",
                color: "#000",
              }}
            >
              {val.say}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
