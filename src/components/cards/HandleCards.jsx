import React, { useState } from "react";
import { HandleTaskInput } from "../../tasks/TaskInput.jsx";
import { HandleTaskList } from "../../tasks/TaskList.jsx";

export default function HandleCards() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="card-container">
      <HandleTaskInput tasks={tasks} setTasks={setTasks} />
      <HandleTaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
