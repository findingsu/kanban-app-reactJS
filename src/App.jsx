import HandleCards from "./assets/HandleCards";
import "./Styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <HandleCards />
      </DndProvider>
    </div>
  );
}
