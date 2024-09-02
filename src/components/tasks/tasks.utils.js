// Adds a new task to the list
export const addTask = (cardId, columnId, newTask, setTasks, clearInput) => {
  if (newTask.trim()) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: newTask.trim(),
        cardId: cardId,
        columnId: columnId,
        checked: false,
      },
    ]);
    clearInput(""); // Clear input field after adding
  }
};

// Deletes a task by its id
export function deleteTask(id, setTasks) {
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
}

// Updates the title of an existing task
export function updateTaskTitle(id, newTitle, setTasks, setEditingId) {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, title: newTitle.trim() || task.title } : task
    )
  );
  setEditingId(null);
}

export function toggleTask(taskId, setTasks) {
  setTasks((prevTasks) =>
    prevTasks
      .map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
      .sort((a, b) => a.checked - b.checked)
  );
}
