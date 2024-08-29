export const addCard = (columnId, setCards) => {
  setCards((prevCards) => [
    ...prevCards,
    {
      id: crypto.randomUUID(),
      content: `Card ${prevCards.length + 1}`,
      columnId: columnId,
    },
  ]);
};
export function deleteCard(id, setCards) {
  setCards((prevCards) => prevCards.filter((card) => card.id !== id));
}
