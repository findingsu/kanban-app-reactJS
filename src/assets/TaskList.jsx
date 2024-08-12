import React from "react";

export function HandleTaskList({ tasks, setTasks }) {
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    const sortedTasks = updatedTasks.sort((a, b) => a.completed - b.completed);

    setTasks(sortedTasks);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(index)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>x</button>
        </li>
      ))}
    </ul>
  );
}
