import React, { useState } from "react";
import "./TreeNode.css";

function TreeNode({ name, percentage, status, onClick, clicked }) {
  console.log(clicked, "my value");
  // Determine which image and background color to use based on the status
  let statusImage, backgroundColor;
  let iconSize = "20px"; // Default icon size

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

  return (
    <div className="button-group" onClick={onClick}>
      <button className={`tree-node ${clicked ? "clicked" : ""}`}>
        <div className="overlay-start" style={{ backgroundColor }}>
          {statusImage && (
            <img src={statusImage} style={{ height: iconSize }} />
          )}
        </div>
        <span className="text">{name}</span>
        <div className="overlay">
          <span>{percentage}%</span>
        </div>
      </button>
    </div>
  );
}

export default TreeNode;
