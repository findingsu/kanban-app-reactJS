import Tasks from "../../Tasks/Task.jsx";
import DeleteCardButton from "../Buttons/DeleteCardBtn.jsx";

export default function Card({ cardId }) {
  return (
    <div className="card">
      <div className="card-title">
        <span>Card {cardId}</span>
        <DeleteCardButton cardId={cardId} />
      </div>
      <Tasks />
    </div>
  );
}
