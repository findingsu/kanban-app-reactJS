import { useState, useRef, useCallback } from "react";
import { useCards } from "../Cards/useCards";

export function useColumns() {
  const [columns, setColumns] = useState([]);
  const nextColumnId = useRef(1);
  const { addCard } = useCards(); // Use addCard from useCards

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

  const addCardToColumn = useCallback(
    (columnId) => {
      const newCard = addCard(); // Get the new card from addCard
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col
        )
      );
    },
    [addCard]
  );

  return {
    columns,
    addColumn,
    deleteColumn,
    updateColumnTitle,
    addCardToColumn,
    setColumns,
  };
}
