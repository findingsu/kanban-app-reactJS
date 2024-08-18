import React, { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
