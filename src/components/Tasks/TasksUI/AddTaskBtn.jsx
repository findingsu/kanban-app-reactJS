import { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";

export function AddTasksButton() {
  const { addTask } = useContext(TasksContext);

  return (
    <>
      <button onClick={addTask}>+</button>
    </>
  );
}
