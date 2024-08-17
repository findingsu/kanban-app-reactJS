import { TasksContext } from "../../../Contexts/ComponentContexts";
import { useContext } from "react";

export default function DeleteTasksBtn() {
  const { tasks, setTasks } = useContext(TasksContext);
  const deleteTask = () => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };
  return <button onClick={deleteTask}>x</button>;
}
