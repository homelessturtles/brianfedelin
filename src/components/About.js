import React from "react";
import x from "../assets/x.svg";

const aboutContStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  backgroundColor: "rgba(2, 2, 2, 0.4)",
  padding: "1rem",
};
const aboutCardStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
  height: "fit-content",
  width: "fit-content",
  borderRadius: "1rem",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

const About = ({ setShowAbout }) => {
  return (
    <div className="about-container" style={aboutContStyle}>
      <div className="about-card" style={aboutCardStyle}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "white",
          }}
        >
          <img
            className="x"
            src={x}
            onClick={() => {
              setShowAbout(false);
            }}
            style={{ width: "2rem", justifyContent: "flex-end" }}
          />
        </div>
        <div
          className="about-info"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
          }}
        >
          <div>
            <p style={{ fontSize: "2.5rem" }}>🌁</p>
            <p>I'm born and raised in the SF Bay Area</p>
          </div>
          <div>
            <p style={{ fontSize: "2.5rem" }}>🧗🏼‍♂️</p>
            <p>
              I enjoy rock climbing and you can probably find me at the
              bouldering gym every other day
            </p>
          </div>
          <div>
            <p style={{ fontSize: "2.5rem" }}>🎧</p>
            <p>Music inspires me and I ocassionally produce music for fun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
