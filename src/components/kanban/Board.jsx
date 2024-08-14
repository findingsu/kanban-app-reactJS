import React, { useState } from "react";
import Column from "./Columns";
import "../../styles/kanbanboard.css";

export default function SetBoard() {
  const [columns, setColumns] = useState([
    { id: 1, title: "To Do", cards: [] },
    { id: 2, title: "In Progress", cards: [] },
    { id: 3, title: "Done", cards: [] },
  ]);

  const addCardToColumn = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: [
                ...col.cards,
                {
                  id:
                    col.cards.length === 0
                      ? 1
                      : col.cards[col.cards.length - 1].id + 1,
                },
              ],
            }
          : col
      )
    );
  };

  const deleteCardFromColumn = (columnId, cardId) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter((card) => card.id !== cardId) }
          : col
      )
    );
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          cards={column.cards}
          onAddCard={() => addCardToColumn(column.id)}
          onDeleteCard={(cardId) => deleteCardFromColumn(column.id, cardId)}
        />
      ))}
    </div>
  );
}
