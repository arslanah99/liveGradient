import React, { useEffect } from "react";
import Granim from "granim";
import "./LordandSaviour.css";

const LordandSavior = () => {
  useEffect(() => {
    new Granim({
      element: "#logo-canvas",
      direction: "left-right",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#ee9ca7", "#0f9b0f"],
            ["#ffdde1", "#ff9a9e"],
            ["#ff7b59", "#ff4d00"],
            ["#ff9a9e", "#ffdde1"],
            ["#ff4d00", "#ff7b59"],
            ["#ffdde1", "#ff9a9e"],
          ],
          transitionSpeed: 2000,
        },
      },
    });
  }, []);

  return (
    <div className="bloc-logo">
      <canvas id="logo-canvas" />
      <div className="logo-mask"></div>
    </div>
  );
};

export default LordandSavior;
