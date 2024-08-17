import CardItem from "./CardItem.jsx";
import React, { useContext } from "react";
import { CardsContext } from "../../../Contexts/ComponentContexts.jsx";

export default function CardList() {
  const { cards } = useContext(CardsContext);

  return (
    <div className="card-list">
      {cards &&
        cards.map((card) => <CardItem key={card.id} cardId={card.id} />)}
    </div>
  );
}
