export function TaskItem({ task, tasks, setTasks }) {
  const handleToggleTask = () => {
    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  const deleteItem = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
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
