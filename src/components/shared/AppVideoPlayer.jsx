// @flow
import React from "react";

const AppVideoPlayer = (props) => {
  const id = btoa(props.src);
  let y = 0;
  let factor = 0;
  let duration = 0;
  let cas = id;
  let poster;
  if (props.poster) {
    poster = props.poster;
  } else {
    poster = undefined;
  }
  const checkAllVideoStatus = () => {
    let videos = Array.from(
      document.getElementsByClassName("react-app-circular-vid")
    );

    for (const video of videos) {
      if (video && video.paused == false) {
        video.pause();
      }
    }
    let playStatus = Array.from(document.getElementsByClassName("fa-pause"));
    for (const playStat of playStatus) {
      playStat.classList.remove("fa-pause");
      playStat.classList.add("fa-play");
    }
  };
  const play = () => {
    let videos = {
      vid: document.getElementById(cas),
      myInterval: null,
    };
    if (videos.vid) {
      let myInterval;
      if (videos.vid.paused == true) {
        checkAllVideoStatus();
        videos.vid.play();
        document.getElementById(cas + "c")?.classList.add("fa-pause");
        document.getElementById(cas + "c")?.classList.remove("fa-play");
        // document.getElementById("play-icon")?.classList.remove("block");
        document.getElementById("play-icon")?.classList.add("hidden");

        duration = videos.vid.duration;
        //interval
        videos.myInterval = setInterval(function () {
          y = videos.vid.currentTime;
          if (y >= duration || videos.vid.paused) {
            if (y >= duration) {
              y = 0;
              videos.vid.pause();
              document.getElementById(cas + "c")?.classList.remove("fa-pause");
              document.getElementById(cas + "c")?.classList.add("fa-play");
              videos.vid.currentTime = 0;
            }

            clearInterval(videos.myInterval);
          } else {
            let a = document.getElementById(cas + "h");
            a.setAttribute(
              "style",
              `--p:${(y / duration) * 100};--c:${
                props.boundaryColor || "#bfd8f3"
              };--b:15px;--w:100%`
            );
          }
        }, props?.duration || 10);
      } else {
        videos.vid.pause();
        document.getElementById(cas + "c")?.classList.remove("fa-pause");
        document.getElementById(cas + "c")?.classList.add("fa-play");
        // document.getElementById("play-icon")?.classList.add("block");
        document.getElementById("play-icon")?.classList.remove("hidden");
      }
    } else {
      console.log("error playing");
    }
  };
  return (
    <>
      <svg
        className="absolute top-1/2 left-1/2 z-10 cursor-pointer text-blue-800 rotate-90 scale-[4]"
        id="play-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-triangle-fill"
        viewBox="0 0 16 16"
        onClick={() => {
          play();
        }}
      >
        <path
          fill-rule="evenodd"
          d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
        />
      </svg>
      <div
        className="react-basic-vid-skill user-select-none"
        style={{ width: props.size || 600, height: props.size || 600 }}
      >
        <div
          className="outer"
          onClick={() => {
            play();
          }}
        >
          <div
            className="circular-loader no-round"
            id={id + "h"}
            style={{}}
          ></div>
          <div className="inner">
            <div
              className="rc"
              onClick={() => {
                play();
              }}
            >
              <div
                className="playPause"
                onClick={() => {
                  play();
                }}
                style={{}}
              >
                <i
                  className="fa fa-play"
                  onClick={() => {
                    play();
                  }}
                  id={id + "c"}
                ></i>
              </div>
              <video
                poster={poster}
                src={props.src}
                id={id}
                className="videoCircle react-app-circular-vid"
                playsInline={true}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppVideoPlayer;
