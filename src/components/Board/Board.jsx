import Column from "../Columns/Column";

import "../../styles/board.css";

export default function Board() {
  return (
    <div className="kanban-board">
      <Column />
    </div>
  );
}
