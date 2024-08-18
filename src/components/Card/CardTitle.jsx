import React, { useState, useContext, useCallback } from "react";
import { CardsContext } from "../../Contexts/ComponentContexts";
import { FiEdit } from "react-icons/fi"; // Importing the edit icon from Feather Icons

export default function EditCardTitle({ cardId }) {
  const { cards, updateCardTitle } = useContext(CardsContext);
  const card = cards.find((c) => c.id === cardId);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card?.title || "");

  const handleTitleChange = useCallback((e) => setTitle(e.target.value), []);

  const handleTitleSubmit = useCallback(() => {
    setIsEditing(false);
    if (title.trim() && title !== card.title) {
      updateCardTitle(cardId, title);
    } else {
      setTitle(card.title);
    }
  }, [cardId, card, title, updateCardTitle]);

  if (!card) return null;

  return isEditing ? (
    <input
      name="card-title-input"
      key={card.id}
      type="text"
      value={title}
      onChange={handleTitleChange}
      onBlur={handleTitleSubmit}
      onKeyPress={(e) => e.key === "Enter" && handleTitleSubmit()}
      autoFocus
    />
  ) : (
    <div
      className="editable-title"
      onClick={() => setIsEditing(true)}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <span>{card.title}</span>
      <FiEdit style={{ marginLeft: "10px", color: "#888" }} />
    </div>
  );
}
