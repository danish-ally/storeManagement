import React from "react";
import Particles from "react-particles-js";
import "../components/PartiCles.css";

function PartiCles() {
  return (
    <div className="part-cont">
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height= "100vh"
      />
    </div>
  );
}

export default PartiCles;
