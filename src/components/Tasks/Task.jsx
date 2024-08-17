import React, { useState } from "react";
import { TaskInput } from "./TasksContainer/TaskInput.jsx";
import { AddTasksButton } from "./Buttons/AddTaskBtn.jsx";
import { TasksContext } from "../../Contexts/ComponentContexts.jsx";
import { TaskItem } from "./TasksContainer/TaskItem.jsx";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setInputValue] = useState("");

  return (
    <TasksContext.Provider value={{ tasks, setTasks, newTask, setInputValue }}>
      <div className="task-input">
        <TaskInput />
        <AddTasksButton />
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </TasksContext.Provider>
  );
}
