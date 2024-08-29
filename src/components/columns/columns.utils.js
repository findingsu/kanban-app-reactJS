export function addColumn(setColumns) {
  setColumns((prevColumns) => [
    ...prevColumns,
    {
      id: crypto.randomUUID(),
      title: `Column ${prevColumns.length + 1}`,
      isEdited: false,
    },
  ]);
}

// Utility function to delete a column by its ID
export function deleteColumn(id, setColumns) {
  setColumns((prevColumns) => prevColumns.filter((column) => column.id !== id));
}

// Utility function to update the title of a column
export function handleUpdateColumnTitle({
  editingId,
  newTitle,
  setColumns,
  setEditingId,
  setNewTitle,
}) {
  if (editingId && newTitle.trim()) {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === editingId
          ? { ...column, title: newTitle, isEdited: true }
          : column
      )
    );
    setEditingId(null);
    setNewTitle("");
  }
}
