import React from "react";
import "./PlayButton.css";

const PlayButton = ({ onPlay, onPause, children }) => {
  let playing = false;
  const handleClick = () => {
    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    playing=!playing;
  };
  return (
    <div>
      <button onClick={handleClick}>{children} : {playing?'>':'||'}</button>
    </div>
  );
};

export default PlayButton;
