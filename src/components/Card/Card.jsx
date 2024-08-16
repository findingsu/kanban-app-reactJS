// Card.jsx
import HandleTasks from "../Tasks/HandleTasks.jsx";
import DeleteCardButton from "./DeleteCardBtn.jsx";
import "./cards.css";

export default function Card({ id, setCards, cards }) {
  return (
    <div className="card" key={id}>
      <div className="card-title">
        <span>Card {id}</span>
        <DeleteCardButton cardId={id} cards={cards} setCards={setCards} />
      </div>
      <HandleTasks />
    </div>
  );
}
