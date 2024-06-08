/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
//import Lego from "../../assets/Icons//Picture1.png";
const Footer = () => {
  const products = [
    { id: 1, name: "OntoCraft" },
    { id: 2, name: "OntoSphere" },
    { id: 3, name: "OntoQL" },
  ];
  const links = [
    { id: 1, text: "Blog", url: "#" },
    { id: 2, text: "Pricing", url: "#" },
    { id: 3, text: "Services", url: "#" },
    { id: 4, text: "Feedback", url: "#" },
  ];

  const addresses = [
    { id: 1, text: "B91 Spring Board, 512/10, Outer Ring Road" },
    { id: 2, text: "Mahadevapura, Bengaluru 560048" },
    { id: 3, text: "India" },
  ];

  return (
    <div className="Foter row-padding">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="single-box">
            <a href="#banner">
              <img src="/assets/Icons//Picture1.png" alt="LegoAI Company" />
            </a>
            <p>Simplifying AI for Enterprises</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-box">
            <h2>Products</h2>
            <ul>
              {products.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          <div className="single-box">
            <h2>Useful links</h2>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-box">
            <h2>Address</h2>
            <ul>
              {addresses.map((item) => (
                <li key={item.id}>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>

            <h2>Follow us on</h2>
            <p className="social">
              <div className="social-link">
                <a href="#" target="_blank">
                  <BsTwitter color="#d117ff" fontSize={28} />
                </a>
                <a
                  href="https://www.linkedin.com/company/legoai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin color="#d117ff" fontSize={28} />
                </a>
                <a
                  href="https://www.youtube.com/@LEGOAI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube color="#d117ff" fontSize={28} />
                </a>
              </div>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved by LegoAI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
