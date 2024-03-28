import React, { useState } from "react";
import "./Home.css";

function ButtonWithIcon({ buttonText, iconSrc }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="button-group">
      <button
        className="button1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <span className="text">{buttonText}</span>
        <div className="overlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
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
      {(isHovered || isFocused) && (
        <img
          src={iconSrc}
          alt="Info Icon"
          className="icon-image"
          style={{
            height: "20px",
            opacity: 1,
          }} /* Adjust opacity based on hover/focus */
        />
      )}
    </div>
  );
}

export default ButtonWithIcon;
