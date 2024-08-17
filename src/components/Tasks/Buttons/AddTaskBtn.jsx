import { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";

export function AddTasksButton() {
  const { newTask, setInputValue, tasks, setTasks } = useContext(TasksContext);
  const addTask = () => {
    if (newTask !== "") {
      const task = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        name: newTask,
        completed: false,
      };
      setTasks([...tasks, task]);
      setInputValue("");
    }
  };
  return (
    <>
      <button onClick={addTask}>+</button>
    </>
  );
}
