import React, { useContext } from "react";
import { CardsContext } from "../../../Contexts/ComponentContexts";

export default function AddCardButton() {
  const { cards, setCards } = useContext(CardsContext);

  const addCard = () => {
    const newCard = {
      id: cards.length === 0 ? 1 : cards[cards.length - 1].id + 1,
    };
    setCards([...cards, newCard]);
  };

  return (
    <button onClick={addCard} className="add-card-button">
      +
    </button>
  );
}
