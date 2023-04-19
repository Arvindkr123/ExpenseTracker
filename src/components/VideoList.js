import Video from "./Video";
import PlayButton from '../Button/PlayButton' 
import VideoDispatchContext from "../Context/VideoDispatchContext";
import useVideoDispatch from "../Hooks/VideoDispatch";
import videos from "../Hooks/Videos";
import useVideos from "../Hooks/Videos";
function VideoList({editVideo }) {
  const videos = useVideos();
  const dispatch = useVideoDispatch();
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