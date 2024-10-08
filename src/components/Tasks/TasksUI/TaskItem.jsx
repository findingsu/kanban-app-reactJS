import { Checkbox } from "./Checkbox";
import DeleteTasksBtn from "./DeleteTaskBtn";

export default function TaskItem({ task }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <Checkbox task={task} />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <DeleteTasksBtn taskId={task.id} />
    </li>
  );
}
