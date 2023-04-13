import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const handleClick = (e) => {
    e.stopPropagation();
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      {console.log("render counter")}
      <h1>{number}</h1>
      <button onClick={handleClick} style={{ color: "white" }}>
        Add count
      </button>
    </>
  );
};

export default Counter;
