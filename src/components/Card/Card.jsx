import HandleTasks from "../Tasks/HandleTasks";
import "./styles/cards.css";

export default function Card({ id, onDelete }) {
  return (
    <div className="card">
      <button onClick={() => onDelete(id)} className="delete-card-button">
        x
      </button>
      <HandleTasks />
    </div>
  );
}
