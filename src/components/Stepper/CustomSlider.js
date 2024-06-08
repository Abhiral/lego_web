import React from "react";

const data = {
  poster:
    "http://20.219.8.127:3000/assets/images/AI_for_Data_Modernization.png",
  title: "Ontocraft",
  slides: [
    {
      title: "Define",
      desc: "Logincal Grouping of Data Assets Using Algorithmic Technique",
      src: "http://legoai.com/assets/recording1.mov",
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
function CustomSlider() {
  let [slide, setSlide] = React.useState(0);

  const defaultSlideClickStyle = {
    background: "#fff",
    // margin:"5px 0",
    height: "4px",
    width: "50px",
    margin: "0px 10px",
    cursor: "pointer",
    borderRadius: "3px",
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",

        background: "linear-gradient(90deg, #041cc6, #020958)",
        color: "#fff",
        // overflow:"hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: 0,
          width: "100%",
          height: "5%",
          background: "rgba(200,200,200,1)",
          // textAlign:"center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          zIndex: 100,
        }}
      >
        <span
          style={{
            ...defaultSlideClickStyle,
            background: slide === 0 ? "#d117ff" : "#fff",
          }}
          onClick={(e) => {
            setSlide(0);
          }}
        ></span>
        <span
          style={{
            ...defaultSlideClickStyle,
            background: slide === 1 ? "#d117ff" : "#fff",
          }}
          onClick={(e) => {
            setSlide(1);
          }}
        ></span>
      </div>

      <div
        style={{
          // maxHeight:"90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <h1>Page title</h1>
        </div>

        <div
          style={{
            flex: 9,
            overflow: "hidden",
          }}
        >
          {slide === 0 ? <MyVideo data={data} /> : <MyImage data={data} />}
        </div>
      </div>
    </div>
  );
}

const MyImage = (props) => {
  let data = props.data || {};
  // console.log(data)
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
      />
    </div>
  );
};

const MyVideo = (props) => {
  const videoRef = React.useRef();
  let [active, setActive] = React.useState(0);
  const issmall = window.innerWidth <= 768;

  let data = props.data || {};

  React.useEffect(() => {
    videoRef.current?.load();
  });
  return (
    <>
      <div
        style={{
          visibility: issmall ? "hidden" : "visible",
          position: "absolute",
          left: "1%",
          background: "#ccc",
          height: "90vh",
          width: "5px",
          float: "right",
          borderRadius: "3px",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height:
              ((window.innerHeight * 0.9) / data["slides"].length) *
                (active + 1) +
              "px",
            background: "#d117ff",
          }}
        ></div>
      </div>

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
                paddingLeft: issmall ? "auto" : "20%",
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
                      // alignItems:"center",
                      // justifyContent:"center"
                    }}
                  >
                    <div
                      style={{
                        textWeight: "bold",
                        color: index <= active ? "#d117ff" : "#fff",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item["title"]}
                    </div>

                    {issmall ? null : (
                      <p
                        style={{
                          fontSize: "0.8em",
                          color: index <= active ? "#d117ff" : "#fff",
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
              controls={true}
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
    </>
  );
};

export default CustomSlider;
