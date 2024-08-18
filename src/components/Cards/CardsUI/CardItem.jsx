import React from "react";
import EditCardTitle from "./CardTitle";
import DeleteCardButton from "./DeleteCardBtn";
import Tasks from "../../Tasks/Task";

export default function CardItem({ cardId }) {
  return (
    <div className="card">
      <div className="card-title">
        <EditCardTitle cardId={cardId} />
        <DeleteCardButton cardId={cardId} />
      </div>
      <div className="tasks-list">
        <Tasks cardId={cardId} />
      </div>
    </div>
  );
}
