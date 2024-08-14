import React from "react";
import Card from "../Card/Card";
import HandleTasks from "../Tasks/HandleTasks";
import "./styles/board.css";

export default function Column({
  title,
  cards,
  onAddCard,
  onDeleteCard,
  onDeleteColumn,
}) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h2>{title}</h2>
        <button onClick={onDeleteColumn} className="delete-column-button">
          &times;
        </button>
      </div>
      <div className="cards-list">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} onDelete={onDeleteCard}>
            <HandleTasks />
          </Card>
        ))}
      </div>
      <div className="column-footer">
        <button onClick={onAddCard} className="add-card-button">
          +
        </button>
      </div>
    </div>
  );
}
