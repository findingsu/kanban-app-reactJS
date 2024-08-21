import { useState } from "react";

export function useDragDrop(initialCards, initialColumns) {
  const [cards, setCards] = useState(initialCards);
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = columns.find(
      (col) => col.id === parseInt(source.droppableId)
    );
    const destColumn = columns.find(
      (col) => col.id === parseInt(destination.droppableId)
    );

    if (sourceColumn === destColumn) {
      const newCards = Array.from(sourceColumn.cards);
      const [reorderedCard] = newCards.splice(source.index, 1);
      newCards.splice(destination.index, 0, reorderedCard);

      const newColumn = {
        ...sourceColumn,
        cards: newCards,
      };

      setColumns((prevColumns) =>
        prevColumns.map((col) => (col.id === newColumn.id ? newColumn : col))
      );
    } else {
      const sourceCards = Array.from(sourceColumn.cards);
      const [movedCard] = sourceCards.splice(source.index, 1);
      const destCards = Array.from(destColumn.cards);
      destCards.splice(destination.index, 0, movedCard);

      setColumns((prevColumns) =>
        prevColumns.map((col) => {
          if (col.id === parseInt(source.droppableId)) {
            return { ...col, cards: sourceCards };
          }
          if (col.id === parseInt(destination.droppableId)) {
            return { ...col, cards: destCards };
          }
          return col;
        })
      );

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === draggableId
            ? { ...card, columnId: parseInt(destination.droppableId) }
            : card
        )
      );
    }
  };

  return { cards, setCards, columns, setColumns, onDragEnd };
}
