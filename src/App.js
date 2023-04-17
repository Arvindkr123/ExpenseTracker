import { useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
function App() {
  console.log("render App");

  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const updateVideo = (video) => {
    // first find the index
    const index = videos.findIndex(v => v.id === video.id);
    // then apply the splice method
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos)
  };

  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id))
    // console.log(id)
  };
  const editVideo = (id) => {
    setEditableVideo(videos.find(video => video.id === id))
    // console.log(id)
  };

  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo} />
      </div>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos} />
    </div>
  );
}

export default App;
