import React, { useState } from "react";
import { TaskInput } from "./components/TaskInput.jsx";
import { AddTasksButton } from "./components/AddTasks.jsx";
import { TaskList } from "./components/TaskList.jsx";

export default function HandleTasks({ className }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setInputValue] = useState("");

  return (
    <div className={className}>
      <div className="task-input">
        <TaskInput newTask={newTask} setInputValue={setInputValue} />
        <AddTasksButton
          tasks={tasks}
          setTasks={setTasks}
          newTask={newTask}
          setInputValue={setInputValue}
        />
      </div>
      <ul className="task-list">
        <TaskList tasks={tasks} setTasks={setTasks} />
      </ul>
    </div>
  );
}
