import { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";

export function TaskInput() {
  const { newTask, setInputValue } = useContext(TasksContext);
  return (
    <input
      type="text"
      name="task-input"
      placeholder="Enter Task..."
      value={newTask}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
