export function addColumn(setColumns) {
  setColumns((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      title: `Column ${prev.length + 1}`,
    },
  ]);
}

export function deleteColumn(id, setColumns) {
  setColumns((prev) => prev.filter((column) => column.id !== id));
}

export function updateColumnTitle(id, newTitle, setColumns, setEditingId) {
  setColumns((prev) =>
    prev.map((column) =>
      column.id === id
        ? { ...column, title: newTitle.trim() || column.title }
        : column
    )
  );
  setEditingId(null);
}
