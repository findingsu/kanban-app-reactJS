import React, { useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";

export default function DeleteColumnButton({ columnId }) {
  const { deleteColumn } = useContext(ColumnsContext);

  return (
    <button
      onClick={() => deleteColumn(columnId)}
      className="delete-column-button"
    >
      x
    </button>
  );
}
