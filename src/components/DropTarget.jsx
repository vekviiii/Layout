import React, { useState } from "react";
import { useDrop } from "react-dnd";

export default function DropTarget({ setItemMonitored }) {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: "CARD",
    drop: (item) => {
      setDroppedItems((prevItems) => {
        const newItems = [...prevItems, item.content];
        setItemMonitored(newItems); // Send updated items to the parent
        return newItems;
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Function to handle removing an item from the droppedItems array
  const handleRemoveItem = (indexToRemove) => {
    setDroppedItems((prevItems) => {
      const newItems = prevItems.filter((_, index) => index !== indexToRemove);
      setItemMonitored(newItems); // Update the parent when items are removed
      return newItems;
    });
  };

  return (
    <div
      ref={dropRef}
      style={{
        height: "50%",
        width: "100%",
        color: "#3300ff",
        backgroundColor: isOver ? "#3c3d37" : "#181C14",
        border: canDrop ? "2px dashed black" : "2px dashed grey",
        textAlign: "center",
        display: "flex", // Use flexbox to align items
        justifyContent: "flex-start", // Align items from the start (side by side)
        flexWrap: "wrap", // Wrap items if they overflow
      }}
    >
      <div className="row h-100 w-100 position-relative">
        {droppedItems.length > 0 ? (
          // Map over the droppedItems array and render each dropped item
          droppedItems.map((item, index) => (
            <div
              className="col p-1"
              key={index}
              style={{
                cursor: "pointer", // Make the items clickable
                padding: "10px",
                border: "1px solid white",
              }}
              onClick={() => handleRemoveItem(index)} // Remove item when clicked
            >
              {item}
            </div>
          ))
        ) : (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
            }}
          >
            Drag here
          </div>
        )}
      </div>
    </div>
  );
}
