import React, { useState } from "react";
import "./Home.css";
import Animation from "./Animation";
import ButtonWithIcon from "./Button";
import EngineComponent from "./EngineComponent";
import Cards from "./Cards";

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <img src="./logo-1.svg" className="logo" alt="" />

      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>
      <nav className="nav">
        <div className="search-box">
          <input type="text" name="" id="" placeholder="search..." />
          <a href="##" className="icon">
            <svg viewBox="0 0 1000 1000" title="Search" className="icon-path">
              <path
                fill="currentColor"
                d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
              />
            </svg>
          </a>
        </div>

        <ul>
          <li>
            <h2>Suggested Actions</h2>
            <div className="buttons-container">
              <ButtonWithIcon buttonText="Action 1" iconSrc="./info-icon.svg" />
              <ButtonWithIcon buttonText="Action 2" iconSrc="./info-icon.svg" />
            </div>
            <div className="buttons-container">
              <ButtonWithIcon buttonText="Action 3" iconSrc="./info-icon.svg" />
              <ButtonWithIcon buttonText="Action 4" iconSrc="./info-icon.svg" />
            </div>
          </li>
          <li>
            <h2>Suggested Checks</h2>
            <div className="buttons-container">
              <ButtonWithIcon buttonText="Check 1" iconSrc="./info-icon.svg" />
              <ButtonWithIcon buttonText="Check 2" iconSrc="./info-icon.svg" />
            </div>
            <div className="buttons-container">
              <ButtonWithIcon buttonText="Check 3" iconSrc="./info-icon.svg" />
              <ButtonWithIcon buttonText="Check 4" iconSrc="./info-icon.svg" />
            </div>
          </li>
        </ul>
      </nav>
      <Cards />
      <h1 className="mb-0">Engine Component</h1>
      <div className="section-center">
        <EngineComponent />
        {/* <Animation /> */}
      </div>
    </div>
  );
}

export default Home;
