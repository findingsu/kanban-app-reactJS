import React, { useContext } from "react";
import {
  CardsContext,
  ColumnsContext,
} from "../../../Contexts/ComponentContexts";

export default function AddCardButton({ columnId }) {
  const { addCard } = useContext(CardsContext);
  const handleAddCard = () => {
    addCard(columnId);
  };
  return (
    <button onClick={handleAddCard} className="add-card-button">
      +
    </button>
  );
}
