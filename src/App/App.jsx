import { DndProvider } from "react-dnd";
import Board from "../components/Board/Board.jsx";
import { HTML5Backend } from "react-dnd-html5-backend";

import "../styles/App.css";

export default function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </>
  );
}
