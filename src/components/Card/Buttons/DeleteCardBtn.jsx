import React, { useContext } from "react";
import { CardsContext } from "../../../Contexts/ComponentContexts";

export default function DeleteCardButton({ cardId }) {
  const { deleteCard } = useContext(CardsContext);

  return (
    <button onClick={() => deleteCard(cardId)} className="delete-card-button">
      x
    </button>
  );
}
