import React from "react";

function Video(props) {
  return (
    <video width="1000" height="450" autoPlay muted loop>
      <source src={props.vdata} type="video/mp4" />
    </video>
  );
}

export default Video;
