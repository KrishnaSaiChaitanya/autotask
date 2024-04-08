import React, { useState } from "react";
import "../styles/Home.css";
import Animation from "../Components/LoadingAnimation";
import ButtonWithIcon from "../Components/Button";
import EngineComponent from "../Components/EngineComponent";
import Cards from "../Components/Cards";
import Engine from "../Components/Engine";

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
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

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
        <ul>
          <h1>Ticket Toolkit</h1>
          <div className="search-box">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for Actions or Checks"
            />
            <a href="##" className="icon">
              <svg viewBox="0 0 1000 1000" title="Search" className="icon-path">
                <path
                  fill="currentColor"
                  d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z"
                />
              </svg>
            </a>
          </div>
          <li>
            <h2>Suggested Actions</h2>
            <div className="buttons-container">
              <div onClick={toggleDialog}>
                <ButtonWithIcon buttonText="Action 1" isAction={true} />
              </div>
              <div onClick={toggleDialog}>
                <ButtonWithIcon buttonText="Action 2" isAction={true} />
              </div>
            </div>
            <div className="buttons-container">
              <ButtonWithIcon
                buttonText="Action 3"
                isAction={true}
                onClick={toggleDialog}
              />
              <ButtonWithIcon
                buttonText="Action 4"
                isAction={true}
                onClick={toggleDialog}
              />
            </div>
          </li>
          <li>
            <h2>Suggested Checks</h2>
            <div className="buttons-container">
              <div onClick={toggleDialog}>
                <ButtonWithIcon buttonText="Check 1" isAction={false} />
              </div>
              <ButtonWithIcon buttonText="Check 2" isAction={false} />
            </div>
            <div className="buttons-container">
              <div onClick={toggleDialog}>
                <ButtonWithIcon buttonText="Check 3" isAction={false} />
              </div>
              <div onClick={toggleDialog}>
                <ButtonWithIcon buttonText="Check 4" isAction={false} />
              </div>
            </div>
          </li>
          <div>
            <div className="button-group-bottom">
              <button className="first-button">
                <i class="fas fa-tasks"></i> &nbsp; Add manual task
              </button>
              <button className="second-button">
                <i class="fas fa-circle-info"></i> &nbsp;Add warning
              </button>
            </div>
          </div>
          <div
            id="popup-wrapper"
            className={`popup-container ${showDialog ? "show" : ""}`}
          >
            <div className="popup-content">
              <span id="close" onClick={toggleDialog}>
                &times;
              </span>
              <div className="card">
                <h2>Action 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eius, aliquam. Maiores, eaque repellat tenetur blanditiis
                  magnam aspernatur delectus eius cumque tempore atque rem ab?
                  Beatae, rem. Tempora error id architecto.
                </p>
                <div className="details">
                  <p>Success Rate: 90%</p>
                  <p>Last Ran Time: 10:00 AM</p>
                </div>
              </div>
              <div className="button-group">
                <button className="run-button" onClick={() => toggleDialog()}>
                  <i class="fa-solid fa-play"></i> &nbsp; Run
                </button>
                <button className="dummy-button">
                  <i class="fa-solid fa-calendar-days"></i> &nbsp;Schedule
                </button>
              </div>
            </div>
          </div>
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
