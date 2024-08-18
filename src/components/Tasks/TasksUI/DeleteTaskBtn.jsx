import { TasksContext } from "../../../Contexts/ComponentContexts";
import { useContext } from "react";

export default function DeleteTasksBtn({ taskId }) {
  const { deleteTask } = useContext(TasksContext);

  return <button onClick={() => deleteTask(taskId)}>x</button>;
}
