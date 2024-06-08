import React from "react";
import "./Banner.css";
function BannerVideo(props) {
  console.log(props.video);
  return (
    <div id="banner" className="Banner-video">
      <video autoPlay loop muted playsInline>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
}

export default BannerVideo;
