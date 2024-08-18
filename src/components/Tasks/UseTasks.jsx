import { useState, useCallback } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setInputValue] = useState("");

  const addTask = useCallback(() => {
    if (newTask.trim() !== "") {
      const task = {
        id:
          tasks.length === 0
            ? 1
            : Math.max(...tasks.map((task) => task.id)) + 1,
        name: newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, task]);
      setInputValue("");
    }
  }, [tasks, newTask]);

  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const toggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks
        .map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
        .sort((a, b) => a.completed - b.completed)
    );
  }, []);

  return { tasks, newTask, setInputValue, addTask, deleteTask, toggleTask };
}
