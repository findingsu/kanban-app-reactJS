import { useDrag } from "react-dnd";

export default function DragCard({ id, children }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="card-container"
      style={{
        border: isDragging ? "5px solid pink" : "none",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}
