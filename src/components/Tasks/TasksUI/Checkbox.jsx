import { useContext } from "react";
import { TasksContext } from "../../../Contexts/ComponentContexts";

export function Checkbox({ task }) {
  const { toggleTask } = useContext(TasksContext);

  return (
    <>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
    </>
  );
}
