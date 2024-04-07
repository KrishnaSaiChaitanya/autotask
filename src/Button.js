import React, { useState } from "react";
import "./Button.css";

function ButtonWithIcon({ buttonText, isAction }) {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    const popupWrapper = document.getElementById("popup-wrapper");
    popupWrapper.classList.toggle("show");
  };
  return (
    <div className="button-group">
      <button className={isAction ? "action-button" : "button1"}>
        <span className="text">{buttonText}</span>
        <div className="overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </button>

      {/* <div class="menu-container">
        <div id="anim">
          <span class="tooltip" data-tooltip="📅 Schedule for later!">
            <img
              src={iconSrc}
              alt="Info Icon"
              className="icon-image"
              style={{
                height: "20px",
                opacity: 1,
              }}
            />
          </span>
        </div>
      </div> */}
      {showDialog &&
        {
          /* <div className="dialog-container">
          <div className="dialog-content zoom-out-animation">
            <div className="card">
              <h2>Description</h2>
              <p>This is the description of the task.</p>
              <p>Success Rate: 90%</p>
              <p>Last Ran Time: 2024-04-05 10:00 AM</p>
            </div>
            <div className="button-group">
              <button className="run-button" onClick={() => toggleDialog()}>
                Run
              </button>
              <button className="dummy-button">Schedule</button>
            </div>
          </div>
        </div> */
        }}
      <div id="popup-wrapper" className="popup-container">
        <div className="popup-content">
          <span id="close" onClick={toggleDialog}>
            &times;
          </span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ButtonWithIcon;
