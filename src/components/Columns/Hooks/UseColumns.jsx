import { useState, useRef, useCallback } from "react";

export function useColumns() {
  const [columns, setColumns] = useState([]);
  const nextColumnId = useRef(1);

  const addColumn = useCallback(() => {
    setColumns((prevColumns) => [
      ...prevColumns,
      {
        id: nextColumnId.current,
        title: `Column ${prevColumns.length + 1}`,
        isEdited: false,
        cards: [],
      },
    ]);
    nextColumnId.current += 1;
  }, []);

  const deleteColumn = useCallback((id) => {
    setColumns((prevColumns) => {
      const newColumns = prevColumns.filter((column) => column.id !== id);
      return newColumns.map((col, index) =>
        col.isEdited ? col : { ...col, title: `Column ${index + 1}` }
      );
    });
  }, []);

  const updateColumnTitle = useCallback((id, newTitle) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === id ? { ...col, title: newTitle, isEdited: true } : col
      )
    );
  }, []);

  return { columns, addColumn, deleteColumn, updateColumnTitle };
}
