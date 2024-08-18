import { useTasks } from "./UseTasks";
import { TasksContext } from "../../Contexts/ComponentContexts";
import TaskInput from "./TasksUI/TaskInput";
import TaskItem from "./TasksUI/TaskItem";
import { AddTasksButton } from "./TasksUI/AddTaskBtn";
export default function Tasks() {
  const taskMethods = useTasks();

  return (
    <TasksContext.Provider value={taskMethods}>
      <div className="tasks-container">
        <div className="task-input">
          <TaskInput />
          <AddTasksButton />
        </div>
        <div className="task-list">
          {taskMethods.tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </TasksContext.Provider>
  );
}
