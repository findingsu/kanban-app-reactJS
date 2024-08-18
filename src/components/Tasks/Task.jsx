import React from "react";
import { useTasks } from "./UseTasks";
import { TasksContext } from "../../Contexts/ComponentContexts";
import TaskInput from "./TasksContainer/TaskInput";
import TaskList from "./TasksContainer/TaskList";
import { AddTasksButton } from "./Buttons/AddTaskBtn";

export default function Tasks() {
  const taskMethods = useTasks();

  return (
    <TasksContext.Provider value={taskMethods}>
      <div className="tasks-container">
        <div className="task-input">
          <TaskInput />
          <AddTasksButton />
        </div>
        <TaskList />
      </div>
    </TasksContext.Provider>
  );
}
