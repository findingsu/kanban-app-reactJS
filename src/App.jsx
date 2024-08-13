import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SetBoard from "./components/kanban/Board";
import HandleCards from "./components/cards/HandleCards";
import "./Styles.css";

export default function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <SetBoard />
        <HandleCards />
      </DndProvider>
    </>
  );
}
