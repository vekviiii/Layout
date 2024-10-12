import React, { useState } from "react";
import { useDrop } from "react-dnd";

export default function DropTarget() {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => {
      // Add the new dropped item to the array of dropped items
      setDroppedItems((prevItems) => [...prevItems, item.content]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      style={{
        height: "100%",
        width: "100%",
        color: "#3300ff",
        backgroundColor: isOver ? "#3c3d37" : "#181C14",
        border: canDrop ? "2px dashed black" : "2px dashed grey",
        textAlign: "start",
        display: "flex", // Use flexbox to align items
        justifyContent: "flex-start", // Align items from the start (side by side)
        // alignItems: 'center',
        // gap: '10px', // Add some space between the dropped divs
        // padding: '10px', // Add some padding
        flexWrap: "wrap", // Wrap items if they overflow
      }}
    >
      <div className="row h-50 w-100">
        {droppedItems.length > 0 ? (
          // Map over the droppedItems array and render each dropped item
          droppedItems.map((item, index) => (
            <div className="col p-1" key={index}>
              {item}
            </div>
          ))
        ) : (
          <div>Drag here</div>
        )}
      </div>
    </div>
  );
}
