import React from "react";
import { useDrag } from "react-dnd";
import "./Box.css";

const Box = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="box"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {text}
    </div>
  );
};

export default Box;
