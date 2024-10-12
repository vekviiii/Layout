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
        opacity
      }}
    >
      {content}
    </div>
  );
}