import React, { useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";

export default function AddColumnButton() {
  const { columns, addColumn } = useContext(ColumnsContext);

  return columns.length < 3 ? (
    <button onClick={addColumn} className="add-column-button">
      Add Column
    </button>
  ) : null;
}
