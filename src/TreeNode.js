import React, { useState } from "react";
import "./TreeNode.css";

function TreeNode({ name, percentage, status, onClick, clicked, isFaded, id }) {
  console.log(id, "my value");
  let statusImage, backgroundColor;
  let iconSize = "20px";
  const getBackgroundColor = (key) => {
    const hue = (key * 5) % 360;
    return `hsl(${hue}, 80%, 50%)`;
  };
  if (status === 1) {
    statusImage = "./tick-icon.svg";
    backgroundColor = "green";
    iconSize = "20px"; // Adjust icon size for status 1
  } else if (status === 0) {
    statusImage = "./fail-icon.svg";
    backgroundColor = "red";
    iconSize = "35px"; // Adjust icon size for status 0
  } else {
    // For status -1
    statusImage = "./pending-icon.svg";
    backgroundColor = "orange";
    iconSize = "30px"; // Adjust icon size for status -1
  }

  const randomBorderColor = () => {
    const random = Math.random();
    return status === 0 ? "green" : "red";
  };

  return (
    <div className="button-group" onClick={onClick}>
      <button
        className={`tree-node ${clicked ? "clicked" : ""}  ${
          isFaded ? "faded" : ""
        }`}
        style={{
          border: clicked ? `2px solid ${randomBorderColor()}` : "",
          backgroundColor: getBackgroundColor(id),
        }}
      >
        {/* <div className="overlay-start" style={{ backgroundColor }}>
          {statusImage && (
            <img src={statusImage} style={{ height: iconSize }} />
          )}
        </div> */}
        <span className="text">{name}</span>
        <div className="overlay">
          <span>{percentage}%</span>
        </div>
      </button>
    </div>
  );
}

export default TreeNode;
