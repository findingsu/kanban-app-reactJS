import React from "react";
import HandleTasks from "../tasks/HandleTasks";
import { useDrag } from "react-dnd";

export default function DragCard({ id, deleteCard }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="card-container"
      style={{
        border: isDragging ? "5px solid pink" : "none",
        marginBottom: "10px",
      }}
    >
      <HandleTasks />
      <button onClick={() => deleteCard(id)} className="delete-card-button">
        x
      </button>
    </div>
  );
}
