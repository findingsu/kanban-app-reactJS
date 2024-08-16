import React, { useState, useRef } from "react";
import Column from "../Columns/Column.jsx";
import AddColumnButton from "../Columns/AddColumnBtn.jsx";
import "./board.css";

export default function Board() {
  const [columns, setColumns] = useState([]);
  const nextColumnId = useRef(1);

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          setColumns={setColumns}
        />
      ))}
      {columns.length < 3 && (
        <AddColumnButton
          columns={columns}
          setColumns={setColumns}
          nextColumnId={nextColumnId}
        />
      )}
    </div>
  );
}
