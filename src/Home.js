import React, { useState } from "react";
import "./Home.css";
import Animation from "./Animation";
import ButtonWithIcon from "./Button";
import EngineComponent from "./EngineComponent";
import Cards from "./Cards";
import Engine from "./Engine";

function Home() {
  const [checksData, setChecksData] = useState([
    { status: true, waiting: false },
    { status: false, waiting: false },
    { status: true, waiting: false },
    { status: false, waiting: false },
    { status: true, waiting: false },
  ]);

  const handlePendingIconClick = async () => {
    for (let i = 0; i < checksData.length; i++) {
      const updatedChecksData = checksData.map((item, index) => ({
        ...item,
        waiting: index > i,
        status: index === i ? null : item.status,
      }));
      setChecksData(updatedChecksData);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const finalChecksData = [...checksData];
      finalChecksData[i].status = Math.random() >= 0.5;
      setChecksData(finalChecksData);
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const chipData = ["Action 1", "Action 2", "Action 3"];
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
      <div className="middle-container">
        <div className="section-center">
          <Engine />
        </div>
        <div className="side-container">
          <div className="checks-container">
            <div className="top-container">
              <p style={{ width: "80px" }}>Run : 12min ago</p>
              <h2>Checks</h2>
              <img
                src="./sync-icon.svg"
                style={{ height: "40px" }}
                onClick={handlePendingIconClick}
              />
            </div>
            <div className="check">
              <h3>Names</h3>
              <h3>Status</h3>
            </div>
            {checksData.map((item, index) => (
              <div className="check" key={index}>
                <div>{`Check${index + 1}`}</div>
                <div>
                  {item.waiting ? (
                    <span>waiting...</span>
                  ) : (
                    <>
                      {item.status !== null && (
                        <>
                          {item.status ? (
                            <i
                              className="fa-solid fa-circle-check"
                              style={{ fontSize: "25px", color: "green" }}
                            ></i>
                          ) : (
                            <i
                              className="fa-solid fa-circle-xmark"
                              style={{ fontSize: "25px", color: "red" }}
                            ></i>
                          )}
                        </>
                      )}
                      {item.status === null && (
                        <i className="fa-solid fa-hourglass-start"></i>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="actions-performed">
            <div className="top-container">
              <h2>Actions Performed</h2>
            </div>
            <div className="chips">
              {chipData.map((chip, index) => (
                <div className="chip" key={index}>
                  <div className="chip-content">{chip}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
