import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode";
import Animation from "./Animation"; // Import your Animation component
import "./Engine.css";

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

  const TreeData = [
    {
      level: 0,
      nodes: [
        {
          id: 1,
          task_name: "Action 1",
          status: 0,
          percentage: 50,
          children: [],
        },
      ],
    },
    {
      level: 1,
      nodes: [
        {
          id: 2,
          task_name: "Action 2",
          status: 0,
          percentage: 10,
          children: [],
        },
        {
          id: 3,
          task_name: "Action 3",
          status: 0,
          percentage: 35,
          children: [],
        },
        {
          id: 4,
          task_name: "Action 4",
          status: 1,
          percentage: 100,
          children: [],
        },
      ],
    },
    {
      level: 2,
      nodes: [
        { id: 5, task_name: "Action 6", status: 0, percentage: 30 },
        { id: 6, task_name: "Action 7", status: 0, percentage: 8 },
        { id: 7, task_name: "Action 8", status: 1, percentage: 0 },
      ],
    },
    {
      level: 3,
      nodes: [
        { id: 8, task_name: "Action 9", status: 1, percentage: 20 },
        { id: 9, task_name: "Action 10", status: 0, percentage: 60 },
        { id: 10, task_name: "Action 11", status: 0, percentage: 0 },
        { id: 11, task_name: "Action 12", status: 1, percentage: 100 },
      ],
    },
    {
      level: 4,
      nodes: [
        { id: 12, task_name: "Action 12", status: 0, percentage: 50 },
        { id: 13, task_name: "Action 13", status: 1, percentage: 0 },
      ],
    },
  ];
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
      }, 3000);
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
