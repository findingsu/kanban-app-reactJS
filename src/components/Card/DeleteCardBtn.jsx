// DeleteCardButton.jsx
import React from "react";

export default function DeleteCardButton({ cardId, cards, setCards }) {
  const deleteCard = () => {
    setCards(cards.filter((card) => card.id !== cardId)); // Remove the card with the given ID
  };

  return (
    <button onClick={deleteCard} className="delete-card-button">
      x
    </button>
  );
}
