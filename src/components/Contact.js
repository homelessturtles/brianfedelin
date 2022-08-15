import React from "react";
import x from "../assets/x.svg";

const contactContStyle = {
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
const contactCardStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
  height: "fit-content",
  width: "fit-content",
  borderRadius: "1rem",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  textAlign: "left",
};

const Contact = ({ setShowContact }) => {
  return (
    <div style={contactContStyle}>
      <div style={contactCardStyle}>
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
              setShowContact(false);
            }}
            style={{
              width: "2rem",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p
              style={{
                fontSize: "2rem",
              }}
            >
              📧
            </p>
            <a href="mailto:brianfedelin1@gmail.com">
              <p style={{ fontWeight: "bold" }}>Brianfedelin1@gmail.com</p>{" "}
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <p style={{ fontSize: "2rem" }}>📱</p>
            <a href="tel:+1-510-299-2317">
              <p style={{ fontWeight: "bold" }}>510-299-2317</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
