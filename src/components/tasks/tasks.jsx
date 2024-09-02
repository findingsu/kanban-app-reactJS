import React, { useState } from "react";
import { useAppContext } from "../../context/context";
import { addTask, deleteTask, updateTaskTitle } from "./tasks.utils";
import {
  TasksContainer,
  TasksList,
  TaskItem,
  DeleteButton,
  TaskTitle,
  TaskTitleInput,
} from "./tasks.styles";
import { Checkbox } from "./tasks.styles";
import { toggleTask } from "./tasks.utils";

export const Tasks = ({ cardId, columnId }) => {
  const { tasks, setTasks, editingId, setEditingId } = useAppContext();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Filter tasks based on columnId and cardId
  const tasksArray = tasks.filter(
    (task) => task.columnId === columnId && task.cardId == cardId
  );

  return (
    <TasksContainer>
      <TasksList>
        {tasksArray.map((task) => (
          <TaskItem key={task.id}>
            <Checkbox
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id, setTasks)}
            />
            {editingId === task.id ? (
              <TaskTitleInput
                defaultValue={task.title}
                onBlur={(e) =>
                  updateTaskTitle(
                    task.id,
                    e.target.value,
                    setTasks,
                    setEditingId
                  )
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    updateTaskTitle(
                      task.id,
                      e.target.value,
                      setTasks,
                      setEditingId
                    );
                  }
                }}
                autoFocus
              />
            ) : (
              <TaskTitle>{task.title}</TaskTitle>
            )}
            <DeleteButton onClick={() => deleteTask(task.id, setTasks)}>
              x
            </DeleteButton>
          </TaskItem>
        ))}
      </TasksList>
      <TaskTitleInput
        type="text"
        placeholder="Add task..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask(cardId, columnId, newTaskTitle, setTasks, setNewTaskTitle);
          }
        }}
      />
    </TasksContainer>
  );
};
