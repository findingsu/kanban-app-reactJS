import { DndProvider } from "react-dnd";
import Board from "../components/Board/Board.jsx";

import "./App.css";

export default function App() {
  return (
    <>
      {/* <DndProvider backend={HTML5Backend}> */}
      <Board />
      {/* </DndProvider> */}
    </>
  );
}
