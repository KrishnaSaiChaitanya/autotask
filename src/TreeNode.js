import React, { useState } from "react";
import "./TreeNode.css";

function TreeNode({ name, percentage, status, onClick }) {
  return (
    <div className="button-group" onClick={onClick}>
      <button className="tree-node">
        <span className="text">{name}</span>
        <div className="overlay">
          <span>{percentage}%</span>
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
    </div>
  );
}

export default TreeNode;
