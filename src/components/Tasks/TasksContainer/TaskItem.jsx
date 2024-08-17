import { Checkbox } from "./Checkbox";
import DeleteTasksBtn from "../Buttons/DeleteTaskBtn";

export function TaskItem({ task }) {
  return (
    <li>
      <Checkbox task={task} />
      <span>{task.name}</span>
      <DeleteTasksBtn task={task} />
    </li>
  );
}
