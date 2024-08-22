import { useState, useCallback } from "react";

export function useColumns() {
  const [columns, setColumns] = useState([]);

  const addColumn = useCallback(() => {
    setColumns((prevColumns) => [
      ...prevColumns,
      {
        id: crypto.randomUUID(),
        title: `Column ${prevColumns.length + 1}`,
        isEdited: false,
      },
    ]);
  });

  const deleteColumn = useCallback((id) => {
    setColumns((prevColumns) => {
      const newColumns = prevColumns.filter((column) => column.id !== id);
      return newColumns.map((col, index) =>
        col.isEdited ? col : { ...col, title: `Column ${index + 1}` }
      );
    });
  });

  const updateColumnTitle = useCallback((id, newTitle) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === id ? { ...col, title: newTitle, isEdited: true } : col
      )
    );
  });

  return {
    columns,
    setColumns,
    addColumn,
    deleteColumn,
    updateColumnTitle,
  };
}
