export function TaskItem({ task, tasks, setTasks }) {
  const handleToggleTask = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteItem = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTask}
      />
      <span>{task.name}</span>
      <button onClick={deleteItem}>x</button>
    </li>
  );
}
