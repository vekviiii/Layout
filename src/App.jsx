import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import DropTarget from "./components/DropTarget";
import "/index.css";

export default function App() {
  return (
    <div style={{height:'100dvh', width:'100vw', position:'relative'}}>
      <DndProvider backend={HTML5Backend}>
          {/* Multiple drag sources */}
          <div style={{position:'absolute'}}>
            <DragDrop content={<div>📦 Drag Box 1</div>} />
            <DragDrop content={<div>📦 Drag Box 2</div>} />
          </div>
          <DropTarget />
    </DndProvider>
    </div>
  );
}
