import { TaskItem } from "./TaskItem.jsx";

export function TaskList({ tasks, setTasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </>
  );
}
