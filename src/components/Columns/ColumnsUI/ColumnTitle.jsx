import React, { useState, useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";

export default function EditColumnTitle({ columnId }) {
  const { columns, updateColumnTitle } = useContext(ColumnsContext);
  const column = columns.find((col) => col.id === columnId);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(column ? column.title : "");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleSubmit = () => {
    setIsEditing(false);
    if (
      title.trim() !== "" &&
      title !== column.title &&
      column.id === columnId
    ) {
      updateColumnTitle(columnId, title);
    } else {
      setTitle(column.title);
    }
  };

  if (!column) return null;

  if (isEditing) {
    return (
      <input
        type="text"
        name="column-title-input"
        value={title}
        key={column.id}
        onChange={handleTitleChange}
        onBlur={handleTitleSubmit}
        onKeyPress={(e) => e.key === "Enter" && handleTitleSubmit()}
        autoFocus
      />
    );
  }

  return <h2 onClick={() => setIsEditing(true)}>{column.title}</h2>;
}
