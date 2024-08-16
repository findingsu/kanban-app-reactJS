// HandleCards.jsx
import React, { useState } from "react";
import CardList from "./CardList.jsx";
import AddCardButton from "./AddCardBtn.jsx";

export default function HandleCards() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <CardList cards={cards} setCards={setCards} />
      <AddCardButton setCards={setCards} cards={cards} />
    </>
  );
}
