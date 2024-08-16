// CardList.jsx
import React from "react";
import Card from "./Card.jsx";

export default function CardList({ cards, setCards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} setCards={setCards} cards={cards} />
      ))}
    </div>
  );
}
