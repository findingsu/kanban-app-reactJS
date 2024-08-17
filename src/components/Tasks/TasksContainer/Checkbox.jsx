import { TasksContext } from "../../../Contexts/ComponentContexts";
import { useContext } from "react";

export function Checkbox({ task }) {
  const { tasks, setTasks } = useContext(TasksContext);

  const toggleTasks = () => {
    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...item, completed: !item.completed } : item
    );

    updatedTasks.sort((a, b) => a.completed - b.completed);
    setTasks(updatedTasks);
  };
  return (
    <>
      <input type="checkbox" checked={task.completed} onChange={toggleTasks} />
    </>
  );
}
