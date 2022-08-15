import "./App.css";
import Nav from "./components/Nav";
import MenuItem from "./components/MenuItem";
import email from "./assets/email.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

const menuStyle = {
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  margin: 0,
};

const linksStyle = {
  display: "flex",
  gap: "0.75rem",
  padding: "3rem",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
};

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        padding: 0,
        margin: 0,
        overflowY: "scroll",
      }}
    >
      <Nav />
      <div className="intro" style={{ paddingBottom: "1rem" }}>
        <h3>Hi, I'm Brian 👋</h3>
        <p style={{ fontSize: "1rem" }}>MERN Stack Web Developer 💻 </p>
      </div>
      <div className="menu" style={menuStyle}>
        <div
          onClick={() => {
            setShowSkills(true);
          }}
        >
          <MenuItem title={"skills"} emoji={"🛠️"} color={"#6a8f6a"} />
        </div>
        <div
          onClick={() => {
            setShowProjects(true);
          }}
        >
          <MenuItem title={"projects"} emoji={"🏗️"} color={"#6a868f"} />
        </div>
        <div
          onClick={() => {
            setShowAbout(true);
          }}
        >
          <MenuItem title={"about"} emoji={"🙋🏽‍♂️"} color={"#7a6a8f"} />
        </div>
        <div
          onClick={() => {
            setShowContact(true);
          }}
        >
          <MenuItem title={"contact"} emoji={"📇"} color={"#8f896a"} />
        </div>
      </div>
      <div className="links" style={linksStyle}>
        <a href="mailto:brianfedelin1@gmail.com">
          <img src={email} style={{ width: "3rem" }}></img>
        </a>
        <a href="https://github.com/homelessturtles" target="_blank">
          <img src={github} style={{ width: "3rem" }}></img>
        </a>
        <a href="https://www.linkedin.com/in/brianfedelin" target="_blank">
          <img src={linkedin} style={{ width: "3rem" }}></img>
        </a>
      </div>
      <div style={{ height: "100%" }}>
        {showAbout && <About setShowAbout={setShowAbout} />}
      </div>
      {showSkills && <Skills setShowSkills={setShowSkills} />}
      <div
        style={{
          height: "100%",
        }}
      >
        {showProjects && <Projects setShowProjects={setShowProjects} />}
      </div>
      <div style={{ height: "100%" }}>
        {showContact && <Contact setShowContact={setShowContact} />}
      </div>
    </div>
  );
}

export default App;
