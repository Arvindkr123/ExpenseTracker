import "./App.css";
import PlayButton from "./Button/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";
function App() {
  return (
    <>
      <div className="App">
        <div>Videos</div>
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          ></Video>
        ))}
        <div style={{ clear: "both" }}>
          {/* <PlayButton onSmash={()=>console.log('HEllo Ak')}>Play-msg</PlayButton>
        <PlayButton onSmash={()=>console.log('HEllo Ak')}>Pause-msg</PlayButton> */}

          <PlayButton
            onPlay={() => console.log("Play")}
            onPause={() => console.log("Pause")}
          >
            Play
          </PlayButton>
        </div>
      </div>
    </>
  );
}

export default App;
