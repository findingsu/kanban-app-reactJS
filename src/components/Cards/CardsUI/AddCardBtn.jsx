import React, { useContext } from "react";
import { CardsContext } from "../../../Contexts/ComponentContexts";

export default function AddCardButton() {
  const { addCard } = useContext(CardsContext);

  return (
    <button onClick={addCard} className="add-card-button">
      +
    </button>
  );
}
