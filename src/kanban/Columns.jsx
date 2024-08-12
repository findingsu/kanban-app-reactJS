import React from "react";
import DragCard from "../cards/DragCard";

export default function SetColumns({ title }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      <DragCard />
    </div>
  );
}
