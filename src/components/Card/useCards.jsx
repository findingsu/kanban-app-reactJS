// useCards.js
import { useState, useCallback } from "react";

export function useCards() {
  const [cards, setCards] = useState([]);

  const addCard = useCallback(() => {
    const newCard = {
      id:
        cards.length === 0 ? 1 : Math.max(...cards.map((card) => card.id)) + 1,
      title: `Card ${cards.length + 1}`,
      isEdited: false,
    };
    setCards((prevCards) => [...prevCards, newCard]);
  }, [cards]);

  const deleteCard = useCallback((cardId) => {
    setCards((prevCards) => {
      const newCards = prevCards.filter((card) => card.id !== cardId);
      return newCards.map((card, index) =>
        card.isEdited ? card : { ...card, title: `Card ${index + 1}` }
      );
    });
  }, []);

  const updateCardTitle = useCallback((id, newTitle) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, title: newTitle, isEdited: true } : card
      )
    );
  }, []);

  return { cards, addCard, deleteCard, updateCardTitle };
}
