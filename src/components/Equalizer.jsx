import { useEffect, useState } from "react";
import "./bar.css";
import Bar from "./Bar";

function Equalizer() {
  const [bars, setBars] = useState([]);
  const numBars = 60; // Adjust the number of bars

  // Create initial bars with random heights
  useEffect(() => {
  const initialBars = [];
  for (let i = 0; i < numBars; i++) {
    const center = Math.floor(numBars / 2);
    const distanceFromCenter = Math.abs(i - center);
    const height = (1 - distanceFromCenter / (numBars / 2)) * 100; // Adjust max height
    initialBars.push({ height, targetHeight: Math.random() * 50 });
  }
  setBars(initialBars);
}, [numBars]);


  // Animate bar heights over time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          height: bar.height + (bar.targetHeight - bar.height) * 0.1,
        }))
      );

      // Randomly update target heights
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          targetHeight: Math.random() * 50,
        }))
      );
    }, 100); // Adjust interval for animation speed

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen w-[100vw] absolute  overflow-hidden">
      <div className="equalizer w-full flex flex-row items-center justify-center h-full ml-[-80px]">
        {bars.map((bar, index) => (
          <Bar key={index} height={bar.height} />
        ))}
      </div>
    </div>
  );
}

export default Equalizer;
