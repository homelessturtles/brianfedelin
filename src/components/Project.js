import React from "react";

const Project = ({ emoji, title, img, tools, description, link }) => {
  const viewbtnStyle = {
    padding: "0.25rem 1rem",
    borderRadius: "2rem",
    backgroundColor: "rgb(6,131,128)",
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div
      className="project"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <p style={{ fontSize: "2rem" }}>{emoji}</p>
        <p style={{ fontWeight: "bold" }}>{title}</p>
      </div>
      <img src={img} style={{ width: "18rem" }}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <p style={{ fontWeight: "bold" }}>🔧 {tools} </p>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" style={{ textDecoration: "none" }}>
        <div style={viewbtnStyle}>View Website</div>
      </a>
    </div>
  );
};

export default Project;
