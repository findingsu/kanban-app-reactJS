import { useState, useCallback } from "react";
import { ColumnsContext } from "../../Contexts/ComponentContexts";
import { useContext } from "react";

export function useCards() {
  const [cards, setCards] = useState([]);
  const { columns, setColumns } = useContext(ColumnsContext);

  const addCard = useCallback(
    (columnId) => {
      const newCard = {
        id:
          cards.length === 0
            ? 1
            : Math.max(...cards.map((card) => card.id)) + 1,
        title: `Card ${cards.length + 1}`,
        isEdited: false,
      };

      // Add card to the cards state
      setCards((prevCards) => [...prevCards, newCard]);

      // Add card to the specified column
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === columnId ? { ...col, cards: [...col.cards, newCard] } : col
        )
      );

      // Log the cards of all columns
      console.log(
        "Cards in all columns:",
        columns.map((col) => col.cards)
      );
      return newCard; // Return the new card if needed
    },
    [cards, setColumns]
  );

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

  return { cards, addCard, deleteCard, updateCardTitle, setCards, setColumns };
}
