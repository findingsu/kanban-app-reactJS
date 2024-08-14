import React, { useState } from "react";
import Column from "./Columns";
import "./styles/board.css";

export default function SetBoard() {
  const [columns, setColumns] = useState([]);

  const addColumn = () => {
    if (columns.length >= 3) return;
    const newId = columns.length > 0 ? columns[columns.length - 1].id + 1 : 1;
    const newColumn = {
      id: newId,
      title: `Column ${newId}`,
      cards: [],
    };
    setColumns([...columns, newColumn]);
  };

  const deleteColumn = (columnId) => {
    setColumns((prevColumns) =>
      prevColumns.filter((col) => col.id !== columnId)
    );
  };

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
    <>
      <div className="kanban-board">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            cards={column.cards}
            onAddCard={() => addCardToColumn(column.id)}
            onDeleteCard={(cardId) => deleteCardFromColumn(column.id, cardId)}
            onDeleteColumn={() => deleteColumn(column.id)}
          />
        ))}
        {columns.length < 3 && (
          <button
            onClick={addColumn}
            className="add-column-button"
            style={{ height: "50px" }}
          >
            Add Column
          </button>
        )}
      </div>
    </>
  );
}
