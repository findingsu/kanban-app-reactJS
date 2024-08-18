import React from "react";
import { useCards } from "./useCards";
import { CardsContext } from "../../Contexts/ComponentContexts";
import CardList from "./CardContainer/CardList";
import AddCardButton from "./Buttons/AddCardBtn";
import "../../styles/cards.css";

export default function HandleCards() {
  const cardMethods = useCards();

  return (
    <CardsContext.Provider value={cardMethods}>
      <CardList />
      <AddCardButton />
    </CardsContext.Provider>
  );
}
