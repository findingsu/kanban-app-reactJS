import React, { useState } from "react";
import { HandleTaskInput } from "./TaskInput.jsx";
import { HandleTaskList } from "./TaskList.jsx";
import { useDrag } from "react-dnd";

export default function HandleCards() {
  const [tasks, setTasks] = useState([]);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className="card-container"
      ref={drag}
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    >
      <h1>Todo</h1>
      <HandleTaskInput
        tasks={tasks}
        setTasks={setTasks}
        style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
      <HandleTaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
