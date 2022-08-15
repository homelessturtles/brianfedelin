import React from "react";
import x from "../assets/x.svg";
import Project from "./Project";
import animeReview from "../assets/animeReview.png";
import jobListing from "../assets/jobListing.png";
import weatherApp from "../assets/weatherApp.png";

const projectsContStyle = {
  position: "absolute",
  minWidth: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  backgroundColor: "rgba(2, 2, 2, 0.4)",
  padding: "1rem",
};
const projectsCardStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "2rem",
  paddingTop: 0,
  height: "90vh",
  width: "fit-content",
  borderRadius: "1rem",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  textAlign: "left",
  overflowY: "scroll",
  position: "relative",
};

const Projects = ({ setShowProjects }) => {
  return (
    <div className="projects-cont" style={projectsContStyle}>
      <div className="projects-card" style={projectsCardStyle}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: "white",
            position: "sticky",
            top: 0,
            left: 0,
            padding: "0.75rem 0rem",
            paddingTop: "2rem",
          }}
        >
          <img
            className="x"
            src={x}
            onClick={() => {
              setShowProjects(false);
            }}
            style={{ width: "2rem", justifyContent: "flex-end" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Project
            emoji={"🇯🇵"}
            title={"Anime Review"}
            img={animeReview}
            tools={"HTML, CSS, Javascript, Firebase"}
            description={
              "Anime review website that allows users to sign in using Google and leave reviews on different films"
            }
            link="https://homelessturtles.github.io/AnimeReview/"
          />
          <Project
            emoji={"🌦"}
            title={"Weather App"}
            img={weatherApp}
            tools={"HTML, CSS, Javascript, Figma, Open Weather Map API"}
            description={
              "Web app that allows the user to search for a city and get weather data. The background changes based on the time of day and weather of the location."
            }
            link="https://homelessturtles.github.io/weather-app/"
          />
          <Project
            emoji={"👨🏽‍💻"}
            title={"Job Listing Site"}
            img={jobListing}
            tools={"HTML, CSS, Javascript, ReactJS"}
            description={
              "Website that displays job posting data and allows the user to filter out results based on job type"
            }
            link="https://homelessturtles.github.io/job-listings/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
