import React from "react";
import { useDrag } from "react-dnd";
import HandleCards from "./HandleCards";

export default function DragCard({ className }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={className}
      style={{
        border: isDragging ? "5px solid pink" : "1px solid #ddd",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <HandleCards />
    </div>
  );
}
