import React, { useEffect, useState } from "react";
import "./AddVideo.css";

const AddVideo = ({ addVideos, updateVideo, editableVideo }) => {
  let initialState = {
    title: "",
    views: "",
    time: "1 month ago",
    channel: "Coder Dost",
    verified: true,
  };
  const [video, setVideo] = useState(initialState);
  const clickSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }
    setVideo(initialState);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
    console.log(video);
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo])
  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter the title"
        name={"title"}
        value={video.title}
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter the views"
        name="views"
        value={video.views}
      />
      <button onClick={clickSubmit}>{editableVideo ? 'Edit' : 'Add'} Video</button>
    </form>
  );
};

export default AddVideo;
