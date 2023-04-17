import React from 'react';
import { useDrop } from 'react-dnd';

const Row = ({ children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'box',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '10px',
        backgroundColor: isOver ? 'lightgray' : 'white',
        padding: '10px',
        margin: '10px 0',
      }}
    >
      {children}
    </div>
  );
};

export default Row;
