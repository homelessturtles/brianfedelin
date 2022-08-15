import React from "react";
import "../styles/menu.css";

const MenuItem = ({ title, emoji, color }) => {
  const menuStyle = {
    backgroundColor: color,
    color: "white",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    width: "50vw",
  };
  return (
    <div className="menu-item" style={{ backgroundColor: color }}>
      <p
        style={{
          fontSize: "2.5rem",
          padding: 0,
          margin: 0,
          userSelect: "none",
        }}
      >
        {emoji}
      </p>
      <p
        style={{
          fontWeight: "400",
          fontSize: "1.5rem",
          padding: 0,
          margin: 0,
          textTransform: "uppercase",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default MenuItem;
