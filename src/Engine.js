import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode";
import Animation from "./Animation"; // Import your Animation component
import "./Engine.css";

const Engine = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [clickedNode, setClickedNode] = useState(null); // Track clicked node

  const TreeData = [
    {
      level: 0,
      nodes: [
        {
          id: 1,
          task_name: "Task 1",
          status: -1,
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
          task_name: "Task 2",
          status: -1,
          percentage: 10,
          children: [],
        },
        { id: 3, task_name: "Task 3", status: 1, percentage: 35, children: [] },
        {
          id: 4,
          task_name: "Task 4",
          status: 0,
          percentage: 100,
          children: [],
        },
      ],
    },
    {
      level: 2,
      nodes: [
        { id: 5, task_name: "Task 6", status: 1, percentage: 30 },
        { id: 6, task_name: "Task 7", status: 0, percentage: 8 },
        { id: 7, task_name: "Task 8", status: 1, percentage: 0 },
      ],
    },
    {
      level: 3,
      nodes: [
        { id: 8, task_name: "Task 9", status: 1, percentage: 20 },
        { id: 9, task_name: "Task 10", status: 0, percentage: 60 },
        { id: 10, task_name: "Task 11", status: 1, percentage: 0 },
        { id: 11, task_name: "Task 12", status: 1, percentage: 100 },
      ],
    },
    {
      level: 4,
      nodes: [
        { id: 12, task_name: "Task 12", status: 0, percentage: 50 },
        { id: 13, task_name: "Task 13", status: 1, percentage: 0 },
      ],
    },
  ];
  const [clickedNodes, setClickedNodes] = useState([]);

  const handleClick = (id, level) => {
    if (level >= currentLevel) {
      setShowAnimation(true); // Show animation component
      setCurrentLevel(level + 1);
      setClickedNodes((prevClickedNodes) => [...prevClickedNodes, id]);

      // const prevNodes = TreeData[currentLevel - 1].nodes;
      // prevNodes.forEach((node) => {
      //   const prevButton = document.getElementById(`node-${node.id}`);
      //   if (prevButton) {
      //     // prevButton.id = `node-${node.id + 30}`;
      //   }
      // });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [showAnimation]);

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
                  onClick={() => handleClick(node.id, levelData.level)}
                >
                  <TreeNode
                    key={node.id}
                    name={node.task_name}
                    percentage={node.percentage}
                    status={node.status}
                    clicked={clickedNodes.includes(node.id)} // Add a prop to indicate clicked state
                  />
                </div>
              ))}
            </div>
            {currentLevel > 0 && <div className="dashed-line"></div>}
          </>
        ))
      )}
    </div>
  );
};

export default Engine;
