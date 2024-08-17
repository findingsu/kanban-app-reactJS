import React, { useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";

export default function AddColumnButton() {
  const { columns, setColumns, nextColumnId } = useContext(ColumnsContext);

  const handleAddColumn = () => {
    const newColumn = {
      id: nextColumnId.current,
      title: `Column ${nextColumnId.current}`,
      cards: [],
    };

    setColumns([...columns, newColumn]);
    nextColumnId.current += 1;
  };

  return columns.length < 3 ? (
    <button onClick={handleAddColumn} className="add-column-button">
      Add Column
    </button>
  ) : null;
}
