import { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";

export default function TaskInput() {
  const { newTask, setInputValue, addTask } = useContext(TasksContext);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <input
      type="text"
      name="task-input"
      placeholder="Enter Task..."
      value={newTask}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onKeyPress={handleKeyPress}
    />
  );
}
