import { addColumn } from "./columns.utils";

export default function AddColumnButton({ columns, setColumns, nextColumnId }) {
  const handleAddColumn = () => {
    addColumn(columns, setColumns, nextColumnId);
  };

  return (
    <button onClick={handleAddColumn} className="add-column-button">
      Add Column
    </button>
  );
}
