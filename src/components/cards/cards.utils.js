export const addCard = (columnId, setCards) => {
  setCards((prevCards) => [
    ...prevCards,
    {
      id: crypto.randomUUID(),
      title: `Card ${prevCards.length + 1}`,
      columnId: columnId,
    },
  ]);
};
export function deleteCard(id, setCards) {
  setCards((prevCards) => prevCards.filter((card) => card.id !== id));
}

export function updateCardTitle(id, newTitle, setCards, setEditingId) {
  setCards((prev) =>
    prev.map((card) =>
      card.id === id ? { ...card, title: newTitle.trim() || card.title } : card
    )
  );
  setEditingId(null);
}
