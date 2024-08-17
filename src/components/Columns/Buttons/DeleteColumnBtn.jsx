import React, { useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";

export default function DeleteColumnButton({ columnId }) {
  const { columns, setColumns } = useContext(ColumnsContext);
  const onDeleteColumn = () => {
    setColumns(columns.filter((c) => c.id !== columnId));
  };
  return (
    <button onClick={onDeleteColumn} className="delete-column-button">
      x
    </button>
  );
}
