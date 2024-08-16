// Add a column to the list
export const addColumn = (columns, setColumns, nextColumnId) => {
  if (columns.length >= 3) return;

  const newColumn = {
    id: nextColumnId.current,
    title: `Column ${nextColumnId.current}`,
    cards: [],
  };

  setColumns([...columns, newColumn]);
  nextColumnId.current += 1;
};

// Delete a column by ID
export const deleteColumn = (columnId, setColumns) => {
  setColumns((prevColumns) =>
    prevColumns.filter((column) => column.id !== columnId)
  );
};
