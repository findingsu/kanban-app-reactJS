import React from "react";
import { CardsContext } from "../../Contexts/ComponentContexts.jsx";
import AddCardButton from "./CardsUI/AddCardBtn.jsx";
import "../../styles/cards.css";
import CardItem from "./CardsUI/CardItem.jsx";
import { useCards } from "./useCards.jsx";

export default function Cards() {
  const cardMethods = useCards();

  return (
    <CardsContext.Provider value={cardMethods}>
      <div className="cards-list">
        {cardMethods.cards.map((card) => (
          <CardItem key={card.id} cardId={card.id} />
        ))}
      </div>
      <AddCardButton />
    </CardsContext.Provider>
  );
}
