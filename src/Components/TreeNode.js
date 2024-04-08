import React, { useState, useEffect } from "react";
import "../styles/TreeNode.css";
import TreeLoader from "./TreeLoader";

function TreeNode({
  name,
  percentage,
  status,
  onClick,
  clicked,
  isFaded,
  id,
  isPending,
}) {
  const [displayImage, setDisplayImage] = useState(false);
  let statusImage, backgroundColor;
  let iconSize = "20px";

  const getBackgroundColor = (key) => {
    const hue = (key * 5) % 360;
    return `hsl(${hue}, 80%, 50%)`;
  };

  useEffect(() => {
    if (!isPending && clicked) {
      setDisplayImage(true);
      const timer = setTimeout(() => {
        setDisplayImage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isPending]);

  if (status === 1) {
    statusImage = "./tick-icon.svg";
    backgroundColor = "green";
    iconSize = "30px"; // Adjust icon size for status 1
  } else if (status === 0) {
    statusImage = "./fail-icon.svg";
    backgroundColor = "red";
    iconSize = "30px"; // Adjust icon size for status 0
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
          border: clicked && !isPending ? `2px solid ${backgroundColor}` : "",
          // backgroundColor: getBackgroundColor(id),
        }}
      >
        {/* {displayImage && (
          <img
            src={statusImage}
            className={`display-image zoom-in`}
            style={{
              height: iconSize,
            }}
          />
        )} */}
        <span className="text" style={{ display: "flex" }}>
          {isPending && <TreeLoader />}
          {name}
          {/* {isPending ? <TreeLoader /> : <span>{name}</span>} */}
        </span>
        <div className="overlay">
          {clicked && !isPending ? (
            <img
              src={statusImage}
              className={`display-image zoom-in`}
              style={{
                height: iconSize,
              }}
            />
          ) : (
            <span>{percentage}%</span>
          )}
        </div>
      </button>
    </div>
  );
}

export default TreeNode;
