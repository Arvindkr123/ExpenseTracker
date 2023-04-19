import Video from "./Video";
import PlayButton from '../Button/PlayButton' 
import { useContext } from "react";
import VideosContext from "../Context/VideosContext";
import VideoDispatchContext from "../Context/VideoDispatchContext";
function VideoList({editVideo }) {
  const videos = useContext(VideosContext);
  const dispatch = useContext(VideoDispatchContext);
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  )
}

export default VideoList