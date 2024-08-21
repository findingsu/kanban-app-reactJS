import { useState, useCallback } from "react";

export function useCards() {
  const [cards, setCards] = useState([]);

  const addCard = useCallback((columnId) => {
    // Card Object
    const newCard = {
      id: crypto.randomUUID(),
      columnId: columnId,
      title: `Card ${cards.length + 1}`,
      isEdited: false,
    };
    // Add new card to cards array
    setCards((prevCards) => [...prevCards, newCard]);
  });

  const deleteCard = useCallback((cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  });

  const updateCardTitle = useCallback((id, newTitle) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, title: newTitle, isEdited: true } : card
      )
    );
  }, []);

  return {
    cards,
    setCards,
    addCard,
    deleteCard,
    updateCardTitle,
  };
}
