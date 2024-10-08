import React, { useState, useContext } from "react";
import { ColumnsContext } from "../../../Contexts/ComponentContexts";
import { FiEdit } from "react-icons/fi";

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

    title.trim() !== "" && title !== column.title && column.id === columnId
      ? updateColumnTitle(columnId, title)
      : setTitle(column.title);
  };

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

  return (
    <>
      <FiEdit style={{ marginRight: "10px", color: "#888" }} />

      <h2
        onClick={() => {
          setIsEditing(true);
        }}
      >
        {column.title}
      </h2>
    </>
  );
}
