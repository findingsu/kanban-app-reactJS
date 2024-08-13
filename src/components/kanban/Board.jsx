import React from "react";
import SetColumns from "./Columns";

export default function SetBoard() {
  return (
    <div className="kanban-board">
      <SetColumns title="To Do" />
      <SetColumns title="In Progress" />
      <SetColumns title="Done" />
    </div>
  );
}
