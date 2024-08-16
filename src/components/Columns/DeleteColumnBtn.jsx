import React from "react";
import { deleteColumn } from "./columns.utils.js";

export default function DeleteColumnButton({ columnId, setColumns }) {
  const handleDeleteColumn = () => {
    deleteColumn(columnId, setColumns);
  };

  return (
    <button onClick={handleDeleteColumn} className="delete-column-button">
      &times;
    </button>
  );
}
