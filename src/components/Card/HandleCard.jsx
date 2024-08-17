import React, { useState } from "react";
import { CardsContext } from "../../Contexts/ComponentContexts.jsx";
import AddCardButton from "./Buttons/AddCardBtn.jsx";
import CardList from "./CardContainer/CardList.jsx";
import "../../styles/cards.css";

export default function HandleCards() {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      <CardList />
      <AddCardButton />
    </CardsContext.Provider>
  );
}
