import React, { useContext, useState } from "react";
import "./PlayButton.css";
import ThemeContext from "../Context/ThemeContext";

const PlayButton = ({ onPlay, onPause, children }) => {
  const [playing, setPlaying] = useState(true);
  const theme = useContext(ThemeContext)
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
      <button className={theme} onClick={handleClick}>{children} : {playing ? '▶️' : '⏸️'}</button>
    </div>
  );
};
export default PlayButton;