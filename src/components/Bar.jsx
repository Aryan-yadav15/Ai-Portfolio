import React from "react";
import "./bar.css";

function Bar({ height }) {
  return (
    <div
      className="bar z-1 rounded-full"
      style={{
        height: `${height}%`, // Set the height as a percentage
      }}
    ></div>
  );
}

export default Bar;
