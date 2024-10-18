import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import DropTarget from "./components/DropTarget";
import "/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [dropTargets, setDropTargets] = useState([{ items: [] }]);

  // Callback function to handle drop events for each DropTarget
  const handleItemMonitored = (index, items) => {
    const updatedDropTargets = [...dropTargets];
    updatedDropTargets[index].items = items;
    setDropTargets(updatedDropTargets);

    // If the last DropTarget is populated, add a new empty one
    if (index === dropTargets.length - 1 && items.length > 0) {
      setDropTargets([...dropTargets, { items: [] }]);
    }
  };

  return (
    <div style={{ height: "100dvh", width: "100vw", position: "relative" }}>
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            position: "fixed",
            top: "5px",
            left: "calc(93% - 9px)",
            zIndex: 1,
          }}
        >
          <DragDrop
            content={
              <div
                style={{
                  width: "100%", // Set fixed width for each dropped content
                  height: "100%", // Set fixed height for each dropped content
                  backgroundColor: "white", // Visual appearance of dropped items
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                📦 Drag Box 1
              </div>
            }
          />
        </div>
        {dropTargets.map((target, index) => (
          <span key={target}>
            <DropTarget
              setItemMonitored={(items) => handleItemMonitored(index, items)}
            />
          </span>
        ))}
      </DndProvider>
    </div>
  );
}
