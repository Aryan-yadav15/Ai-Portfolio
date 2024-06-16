import React from "react";
import "./bar.css";

function Bar({ height }) {
  return (
    <div
      className="bar rounded-full"
      style={{
        height: `${height}%`, // Set the height as a percentage
      }}
    ></div>
  );
}

export default Bar;
