import { useAppContext } from "../../context/context";
import {
  addTask,
  deleteTask,
  updateTaskTitle,
  toggleTask,
} from "./tasks.utils";
import {
  TasksContainer,
  TasksList,
  TaskItem,
  TaskTitle,
  TaskTitleInput,
  Checkbox,
} from "./tasks.styles";

export const Tasks = ({ cardId, columnId }) => {
  const { tasks, setTasks, editingId, setEditingId } = useAppContext();

  const currentColumnTasks = tasks.filter(
    (task) => task.columnId === columnId && task.cardId === cardId
  );

  return (
    <TasksContainer>
      <TasksList>
        {currentColumnTasks.map((task) => (
          <TaskItem key={task.id}>
            <Checkbox
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id, setTasks)}
            />
            {editingId === task.id ? (
              <TaskTitleInput
                type="text"
                defaultValue={task.title}
                onBlur={(e) =>
                  updateTaskTitle(
                    task.id,
                    e.target.value,
                    setTasks,
                    setEditingId
                  )
                }
                onKeyDown={(e) => {
                  e.key === "Enter"
                    ? updateTaskTitle(
                        task.id,
                        e.target.value,
                        setTasks,
                        setEditingId
                      )
                    : e.key === "Backspace" && e.target.value === ""
                    ? (currentColumnTasks.findIndex((t) => t.id === task.id) > 0
                        ? setEditingId(
                            currentColumnTasks[
                              currentColumnTasks.findIndex(
                                (t) => t.id === task.id
                              ) - 1
                            ].id
                          )
                        : setEditingId(null),
                      deleteTask(
                        task.id,
                        currentColumnTasks,
                        setTasks,
                        setEditingId
                      ))
                    : null;
                }}
                autoFocus
              />
            ) : (
              <TaskTitle onClick={() => setEditingId(task.id)}>
                {task.title}
              </TaskTitle>
            )}
          </TaskItem>
        ))}
        <TaskItem>
          <TaskTitleInput
            type="text"
            placeholder="Add a new task"
            onKeyDown={(e) => {
              e.key === "Enter"
                ? (addTask(cardId, columnId, e.target.value, setTasks),
                  (e.target.value = ""))
                : e.key === "Backspace" && e.target.value === ""
                ? currentColumnTasks.length > 0 &&
                  setEditingId(
                    currentColumnTasks[currentColumnTasks.length - 1].id
                  )
                : null;
            }}
          />
        </TaskItem>
      </TasksList>
    </TasksContainer>
  );
};
