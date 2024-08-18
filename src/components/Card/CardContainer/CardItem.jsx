import React from "react";
import EditCardTitle from "../CardTitle";
import DeleteCardButton from "../Buttons/DeleteCardBtn";
import Tasks from "../../Tasks/Task";

export default function Card({ cardId }) {
  return (
    <div className="card">
      <div className="card-title">
        <EditCardTitle cardId={cardId} />
        <DeleteCardButton cardId={cardId} />
      </div>
      <Tasks cardId={cardId} />
    </div>
  );
}
