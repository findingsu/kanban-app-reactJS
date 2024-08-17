import HandleColumns from "../Columns/Column.jsx";

import "../../styles/board.css";

export default function Board() {
  return (
    <div className="kanban-board">
      <HandleColumns />
    </div>
  );
}
