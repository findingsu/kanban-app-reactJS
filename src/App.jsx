import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SetBoard from "./components/kanban/Board.jsx";
import "./styles/index.css";

export default function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <SetBoard />
      </DndProvider>
    </>
  );
}
