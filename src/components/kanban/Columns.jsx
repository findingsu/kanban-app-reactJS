import React from "react";
import Card from "../cards/Card";
import HandleTasks from "../tasks/HandleTasks";
import "../../styles/cards.css";

export default function Column({ title, cards, onAddCard, onDeleteCard }) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h2>{title}</h2>
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
