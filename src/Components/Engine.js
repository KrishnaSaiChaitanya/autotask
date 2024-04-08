import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode";
import Animation from "./LoadingAnimation"; // Import your Animation component
import "../styles/Engine.css";
import TreeData from "../Data.json";

const Engine = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [fadedNodes, setFadedNodes] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [ClickedId, setClickedId] = useState(0);
  const [Clickedlevel, setClickedlevel] = useState(0);

  const toggleDialog = (id, level) => {
    if (level >= currentLevel) {
      setClickedId(id);
      setClickedlevel(level);
      setShowDialog(!showDialog);
    }
  };

  const [clickedNodes, setClickedNodes] = useState([]);
  const [pendingNode, setPendingNode] = useState([]);

  const handleClick = (id, level) => {
    if (level >= currentLevel) {
      console.log("hello ..");
      // setShowAnimation(true);
      // setCurrentLevel(level + 1);
      setClickedNodes((prevClickedNodes) => [...prevClickedNodes, id]);
      const remainingNodes = TreeData[level].nodes.filter(
        (node) => node.id !== id
      );
      setFadedNodes((prevFadedNodes) => [
        ...prevFadedNodes,
        ...remainingNodes.map((node) => node.id),
      ]);
      setPendingNode(id);

      setTimeout(() => {
        setPendingNode(null);
        setCurrentLevel(level + 1);
      }, 4000);
      // const prevNodes = TreeData[currentLevel - 1].nodes;
      // prevNodes.forEach((node) => {
      //   const prevButton = document.getElementById(`node-${node.id}`);
      //   if (prevButton) {
      //     // prevButton.id = `node-${node.id + 30}`;
      //   }
      // });
    }
    setShowDialog(!showDialog);
  };
  const findTaskNameByIdAndLevel = (id, level) => {
    const levelIndex = TreeData.findIndex((data) => data.level === level);
    if (levelIndex !== -1) {
      const node = TreeData[levelIndex].nodes.find((node) => node.id === id);
      return node ? node.task_name : null;
    }
    return null;
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowAnimation(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [showAnimation]);

  return (
    <div className="tree-container">
      {showAnimation ? (
        <Animation />
      ) : (
        TreeData.slice(0, currentLevel + 1).map((levelData, index) => (
          <>
            <div key={index} className={`tree-level`}>
              {levelData.nodes.map((node) => (
                <div
                  id={`node-${node.id}`}
                  //   className={`tree-node-container ${
                  //     clickedNodes.includes(node.id) ? "clicked-tree-node" : ""
                  //   }`}
                  onClick={() => toggleDialog(node.id, levelData.level)}
                >
                  <TreeNode
                    key={node.id}
                    id={node.id}
                    name={node.task_name}
                    percentage={node.percentage}
                    status={node.status}
                    isFaded={fadedNodes.includes(node.id)}
                    clicked={clickedNodes.includes(node.id)}
                    isPending={pendingNode === node.id}
                    // Add a prop to indicate clicked state
                  />
                </div>
              ))}
            </div>
            {currentLevel > 0 && <div className="dashed-line"></div>}
            {currentLevel > 0 && index % 2 == 0 && (
              <div className="checkpoint-text">
                Checkpoint {index / 2 + 1} reached
              </div>
            )}
          </>
        ))
      )}
      <div
        id="popup-wrapper"
        className={`popup-container1 ${showDialog ? "show" : ""}`}
      >
        <div className="popup-content">
          <span id="close" onClick={toggleDialog}>
            &times;
          </span>
          <div className="card">
            <h2>{findTaskNameByIdAndLevel(ClickedId, Clickedlevel)}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              aliquam. Maiores, eaque repellat tenetur blanditiis magnam
              aspernatur delectus eius cumque tempore atque rem ab? Beatae, rem.
              Tempora error id architecto.
            </p>
            <div className="details">
              <p>Success Rate: 90%</p>
              <p>Last Ran Time: 10:00 AM</p>
            </div>
          </div>
          <div className="button-group">
            <button
              className="run-button"
              onClick={() => handleClick(ClickedId, Clickedlevel)}
            >
              <i class="fa-solid fa-play"></i> &nbsp; Run
            </button>
            <button className="dummy-button">
              <i class="fa-solid fa-calendar-days"></i> &nbsp;Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;
