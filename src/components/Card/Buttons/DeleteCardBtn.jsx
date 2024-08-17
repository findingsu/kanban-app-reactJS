import React, { useContext } from "react";
import { CardsContext } from "../../../Contexts/ComponentContexts";

export default function DeleteCardButton({ cardId }) {
  const { cards, setCards } = useContext(CardsContext);
  const deleteCard = () => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <button onClick={deleteCard} className="delete-card-button">
      x
    </button>
  );
}
