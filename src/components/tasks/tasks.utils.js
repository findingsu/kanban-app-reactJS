export const addTask = (cardId, columnId, newTask, setTasks) => {
  if (newTask.trim()) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title: newTask.trim(),
        cardId,
        columnId,
      },
    ]);
  }
};

export function deleteTask(id, tasksArray, setTasks, setEditingId) {
  const currentTaskIndex = tasksArray.findIndex((task) => task.id === id);
  setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

  if (currentTaskIndex > 0) {
    setEditingId(tasksArray[currentTaskIndex - 1].id);
  } else {
    setEditingId(null);
  }
}

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
