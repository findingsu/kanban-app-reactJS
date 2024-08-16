// Column.jsx
import React from "react";
import HandleCards from "../Card/HandleCard.jsx";
import DeleteColumnButton from "./DeleteColumnBtn.jsx";
import "../Board/board.css";

export default function Column({ id, title, setColumns }) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h2>{title}</h2>
        <DeleteColumnButton columnId={id} setColumns={setColumns} />
      </div>
      <div className="cards-list">
        <HandleCards columnId={id} />
      </div>
    </div>
  );
}
