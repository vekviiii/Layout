import React from 'react';
import { useDrag } from 'react-dnd';

export default function DragDrop({ content }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'CARD',
      item: { content },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [content]
  );

  return (
    <div
      ref={dragRef}
      style={{
        opacity,
        width: '100px', // Set fixed width for each dropped content
        height: '100px', // Set fixed height for each dropped content
        backgroundColor: 'white', // Visual appearance of dropped items
        border: '1px solid black',
        display: 'flex',
        cursor: 'move'
      }}
    >
      {content}
    </div>
  );
}