// AddCardButton.jsx
import React from "react";

export default function AddCardButton({ cards, setCards }) {
  const addCard = () => {
    const newCard = {
      id: cards.length === 0 ? 1 : cards[cards.length - 1].id + 1,
    };
    setCards([...cards, newCard]); // Add the new card to the list
  };

  return (
    <button onClick={addCard} className="add-card-button">
      +
    </button>
  );
}
