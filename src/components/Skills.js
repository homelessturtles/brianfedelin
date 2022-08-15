import React from "react";
import x from "../assets/x.svg";

const skillsContStyle = {
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
const skillsCardStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
  paddingTop: 0,
  maxHeight: "90vh",
  width: "fit-content",
  borderRadius: "1rem",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  textAlign: "left",
  overflowY: "scroll",
};

const Skills = ({ setShowSkills }) => {
  return (
    <div style={skillsContStyle}>
      <div className="skills" style={skillsCardStyle}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "white",
            position: "sticky",
            top: 0,
            left: 0,
            paddingTop: "2rem",
          }}
        >
          <img
            className="x"
            src={x}
            onClick={() => {
              setShowSkills(false);
            }}
            style={{ width: "2rem", justifyContent: "flex-end" }}
          />
        </div>
        <p>
          I am proficient in <strong>client-side</strong> languages such as{" "}
          <strong>HTML, CSS, Javascript, and ReactJS</strong> in order to make
          dynamic and interactive user interfaces
        </p>
        <p>
          Additionally, I'm knowledgable in <strong>server-side</strong>{" "}
          technology such as
          <strong> MongoDB/Mongoose</strong> to create and interact with
          databases, as well as <strong>Express and NodeJS</strong> to handle
          network request and responses.
        </p>
        <p>
          Beyond pure web development, I also have experience in
          design/marketing in which I learned <strong>graphic/UX design</strong>{" "}
          tools such as
          <strong> Figma</strong> for website protoyping and{" "}
          <strong>Canva</strong> for creating engaging visuals.
        </p>
        <p>
          I am also a <strong>self starter</strong> and enjoy taking the
          intitaitive of learning new/congruent skills on my own!
        </p>
      </div>
    </div>
  );
};

export default Skills;
