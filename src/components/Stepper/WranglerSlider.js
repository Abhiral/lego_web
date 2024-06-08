import React from "react";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const _data = {
  poster:
    "http://20.219.8.127:3000/assets/images/AI_for_Data_Modernization.png",
  title: <div>Ontocraft</div>,
  slides: [
    {
      title: "Define",
      desc: "Logincal Grouping of Data Assets Using Algorithmic Technique",
      src: "https://filesamples.com/samples/video/ogv/sample_640x360.ogv",
    },
    {
      title: "Title2",
      desc: "desc",
      src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    },
    {
      title: "Title3",
      desc: "desc",
      src: "https://filesamples.com/samples/video/ogv/sample_640x360.ogv",
    },
    {
      title: "Title4",
      desc: "desc",
      src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    },
  ],
};
function WranglerSlider(props) {
  let [slide, setSlide] = React.useState(0);
  const issmall = window.innerWidth <= 768;
  let data = props.data || _data || {};
  const defaultSlideClickStyle = {
    cursor: "pointer",
    margin: "0px 10px",
  };
  return (
    <>
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          //background:"linear-gradient(30deg, rgba(11,48,237,1) 7%, rgba(3,24,105,1) 7%, rgba(1,19,80,1) 87%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <h1>{data.title}</h1>
        </div>

        {/* start of main section */}
        <div
          style={{
            flex: 1,
          }}
        >
          {slide === 0 ? (
            <MyVideo data={data} issmall={issmall} />
          ) : (
            <MyImage data={data} issmall={issmall} />
          )}
        </div>
        {/* start od botom section */}
        <div
          style={{
            flex: 2,
            background: "rgba(100,100,100,0.3)",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              ...defaultSlideClickStyle,
              color: slide === 0 ? "#d117ff" : "#fff",
            }}
            onClick={(e) => {
              setSlide(0);
            }}
          >
            <HorizontalRuleIcon />
          </span>
          <span
            style={{
              ...defaultSlideClickStyle,
              color: slide === 1 ? "#d117ff" : "#fff",
            }}
            onClick={(e) => {
              setSlide(1);
            }}
          >
            <HorizontalRuleIcon />
          </span>
        </div>
      </div>
    </>
  );
}

const MyImage = (props) => {
  let data = props.data || {};

  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={data["poster"] || ""}
        alt="LegoAiOntocraft"
      />
    </div>
  );
};

const MyVideo = (props) => {
  const videoRef = React.useRef();
  let [active, setActive] = React.useState(0);

  const issmall = props.issmall;

  let data = props.data || {};

  React.useEffect(() => {
    videoRef.current?.load();
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            visibility: issmall ? "hidden" : "visible",
            float: "right",
            // position:"relative",
            // top:0,
            // left:"1%",
            background: "#ccc",
            height: "88vh",
            width: "5px",
            // float:"right",
            borderRadius: "5px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              height:
                ((window.innerHeight * 0.88) / data["slides"].length) *
                  (active + 1) +
                "px",
              background: "#d117ff",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          flex: 30,
        }}
      >
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12">
                    <div
                      style={{
                        display:(window.innerWidth <= 750)?"none":"block",
                        background:"#ccc",
                        height:"100%",
                        width:"5px",
                        float:"right",
                        borderRadius:"3px",
                      }}
                      >
                        <div
                          style={{
                            height:window.innerHeight*0.90/(data["slides"].length)*(active+1) + "px",
                            background:"#d117ff"
                        
                          }}
                        >
                        </div>
                        
                    </div>
                  </div> */}
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <div
                style={{
                  // height:"90vh",
                  height: issmall ? "auto" : "90vh",
                  display: "flex",
                  // flexDirection:"column",
                  flexDirection: issmall ? "row" : "column",
                  marginBottom: issmall ? "10%" : "0",
                  justifyContent: "space-evenly",
                  // paddingLeft:(issmall)?"auto":"20%",
                  textAlign: issmall ? "center" : "left",
                }}
              >
                {data["slides"].map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => {
                        setActive(index);
                      }}
                      style={{
                        flex: 1,
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        // alignItems:"center",
                        // justifyContent:"center"
                      }}
                    >
                      <div
                        style={{
                          textWeight: "bold",
                          color: index === active ? "#fff" : "#ccc",
                          fontSize: index === active ? "1.2em" : "1em",
                          // textDecoration:(index===active)?"underline #d117ff":"none",
                          alignContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "bolder",
                        }}
                      >
                        {item["title"]}
                      </div>

                      {issmall ? null : (
                        <p
                          style={{
                            fontSize: "0.8em",
                            textAlign: "justify",
                            color: index === active ? "#fff" : "#ccc",
                          }}
                        >
                          {item["desc"]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              // className="col-lg-10 col-md-9 col-sm-12 col-xs-12"
              className="col-lg-10 col-md-9 col-sm-12 col-xs-12"
              style={{
                display: "flex",
                // background:"#000"
              }}
            >
              <video
                ref={videoRef}
                id="player"
                muted={true}
                // controls={true}
                autoPlay={true}
                loop={true}
                style={{
                  flex: 1,
                  maxHeight: "90vh",
                  objectFit: "contain",
                  width: "100%",
                  // boxShadow:"0px 0px 10px #0070c0"
                }}
              >
                <source src={data["slides"][active]["src"] || ""}></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WranglerSlider;
