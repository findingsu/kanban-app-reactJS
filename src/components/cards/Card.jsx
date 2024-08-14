import "../../styles/cards.css";

export default function Card({ id, onDelete, children }) {
  return (
    <div className="card">
      <button onClick={() => onDelete(id)} className="delete-card-button">
        x
      </button>
      {children}
    </div>
  );
}
