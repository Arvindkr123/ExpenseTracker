import React from "react";
import "./App.css";
import Video from "./components/Video";

const App = () => {
  return (
    <>
      <Video title={'React learning'} color='red' />
      <Video title={'JS learning'} color='green' />
      <Video title={'CSS learning'} color='yellow' />
    </>
  );
};

export default App;
