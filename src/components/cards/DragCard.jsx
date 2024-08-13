import HandleTasks from "../tasks/HandleTasks";
import { useDrag } from "react-dnd";

export default function DragCard() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="card-container"
      style={{
        border: isDragging && "5px solid pink",
      }}
    >
      <HandleTasks />
    </div>
  );
}
