import React, { useState } from "react";
import "./EngineComponent.css";
import ReactDOM from "react-dom";
import ButtonWithIcon from "./Button";
import TreeNode from "./TreeNode";
import Animation from "./Animation";

const TreeData = [
  {
    level: 0,
    nodes: [
      { id: 1, task_name: "Task 1", status: -1, percentage: 50, children: [] },
    ],
  },
  {
    level: 1,
    nodes: [
      {
        id: 2,
        task_name: "Task 2",
        status: -1,
        percentage: 100,
        children: [],
      },
      { id: 3, task_name: "Task 3", status: 1, percentage: 75, children: [] },
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
      { id: 5, task_name: "Task 6", status: 1, percentage: 100 },
      { id: 6, task_name: "Task 7", status: 0, percentage: 50 },
      { id: 7, task_name: "Task 8", status: 1, percentage: 0 },
    ],
  },
  {
    level: 3,
    nodes: [
      { id: 8, task_name: "Task 9", status: 1, percentage: 100 },
      { id: 9, task_name: "Task 10", status: 0, percentage: 50 },
      { id: 10, task_name: "Task 11", status: 1, percentage: 0 },
    ],
  },
  {
    level: 4,
    nodes: [
      { id: 10, task_name: "Subchild 1", status: 1, percentage: 100 },
      { id: 11, task_name: "Subchild 2", status: 0, percentage: 50 },
      { id: 12, task_name: "Subchild 3", status: 1, percentage: 0 },
    ],
  },
];

function EngineComponent() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentNodes, setCurrentNodes] = useState(
    TreeData[currentLevel].nodes
  );
  function findTaskNameByParentId(parentId) {
    // Extract the id after "node-"
    const id = parseInt(parentId.split("-")[1]);

    // Search for the node with the extracted id
    for (let i = 0; i < TreeData.length; i++) {
      for (let j = 0; j < TreeData[i].nodes.length; j++) {
        if (TreeData[i].nodes[j].id === id) {
          return TreeData[i].nodes[j];
        }
      }
    }
    return null;
  }

  const addNextLevelTree = (parentId, level, TreeData) => {
    console.log("parent id is ", parentId);
    const parentElement = document.getElementById(parentId);

    if (parentElement) {
      const parentHtml = `
    <div class="hv-item">
      <div class="hv-item-parent">
       <div id="${parentId}-content"></div>
      </div>
      <div class="hv-item-children">
        <div class="hv-item-child" id="${`node-${TreeData[level].nodes[0].id}`}">
          <div id="node-${TreeData[level].nodes[0].id}-content"></div>
        </div>
        <div class="hv-item-child" id="${`node-${TreeData[level].nodes[1].id}`}">
          <div id="node-${TreeData[level].nodes[1].id}-content"></div>
        </div>
        <div class="hv-item-child" id="${`node-${TreeData[level].nodes[2].id}`}">
          <div id="node-${TreeData[level].nodes[2].id}-content"></div>
        </div>
      </div>
    </div>
  `;
      parentElement.innerHTML = parentHtml;
      // Change IDs of elements from the previous level
      const prevLevel = level - 1;
      const prevNodes = TreeData[prevLevel].nodes;
      prevNodes.forEach((node) => {
        const prevButton = document.getElementById(`node-${node.id}`);
        if (prevButton) {
          prevButton.id = `node-${node.id + 30}`;
        }
      });
      const animationContainer = document.getElementById("animation-container");
      ReactDOM.render(<Animation />, animationContainer);
      const hvContainer = document.querySelector(".hv-container");
      hvContainer.style.display = "none";

      setTimeout(() => {
        hvContainer.style.display = "block";
        ReactDOM.unmountComponentAtNode(animationContainer);
      }, 1000);
      // Render TreeNode components using ReactDOM.render
      const renderTreeNode = (id, node) => {
        const container = document.getElementById(`node-${id}-content`);
        ReactDOM.render(
          <TreeNode
            name={node.task_name}
            percentage={node.percentage}
            status={node.status}
            onClick={() => handleClick(node.id, TreeData, level + 1)}
          />,
          container
        );
      };
      renderTreeNode(
        findTaskNameByParentId(parentId).id,
        findTaskNameByParentId(parentId)
      );
      renderTreeNode(TreeData[level].nodes[0].id, TreeData[level].nodes[0]);
      renderTreeNode(TreeData[level].nodes[1].id, TreeData[level].nodes[1]);
      renderTreeNode(TreeData[level].nodes[2].id, TreeData[level].nodes[2]);

      // Add event listeners to the buttons
      const button1 = document.getElementById(
        `node-${TreeData[level].nodes[0].id}`
      );
      const button2 = document.getElementById(
        `node-${TreeData[level].nodes[1].id}`
      );
      const button3 = document.getElementById(
        `node-${TreeData[level].nodes[2].id}`
      );
      if (button1) {
        button1.addEventListener("click", () =>
          handleClick(TreeData[level].nodes[0].id, TreeData, level + 1)
        );
      }
      if (button2) {
        button2.addEventListener("click", () =>
          handleClick(TreeData[level].nodes[1].id, TreeData, level + 1)
        );
      }
      if (button3) {
        button3.addEventListener("click", () =>
          handleClick(TreeData[level].nodes[2].id, TreeData, level + 1)
        );
      }
    }
    console.log(parentElement);
  };

  const handleClick = (nodeId, nodeNames, level) => {
    const nextLevel = currentLevel + 1;
    setCurrentLevel(nextLevel);
    console.log(currentLevel);
    addNextLevelTree(`node-${nodeId}`, level, nodeNames);
  };

  return (
    <div>
      <div className="hv-container">
        <div className="hv-wrapper">
          {currentNodes.map((node) => (
            <div className="hv-item" key={node.id} id={`node-${node.id}`}>
              <div className="hv-item">
                <TreeNode
                  name={node.task_name}
                  percentage={node.percentage}
                  status={node.status}
                  onClick={() => handleClick(node.id, TreeData, 1)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="animation-container"></div>
    </div>
  );
}

export default EngineComponent;
