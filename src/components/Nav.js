import React from "react";
import memoji from "../assets/brianMemoji.jpeg";
import burger from "../assets/hamburger.svg";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={memoji}></img>
      </div>
      {/*<div className="burger">
        <img src={burger}></img>
        </div>*/}
    </div>
  );
};

export default Nav;
