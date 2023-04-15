import React, {useState} from "react";
import "./PlayButton.css";

const PlayButton = ({ onPlay, onPause, children }) => {
  const[playing, setPlaying]= useState(true);
  const handleClick = (e) => {
    // console.log(e)
    e.stopPropagation();
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setPlaying(!playing);
  };
  return (
    <div>
      <button onClick={handleClick}>{children} : {playing?'▶️':'⏸️'}</button>
    </div>
  );
};

export default PlayButton;
