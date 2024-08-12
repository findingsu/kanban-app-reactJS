import React, { useState } from "react";

export function HandleTaskInput({ tasks, setTasks }) {
  const [newTask, setInputValue] = useState("");

  const addTasks = () => {
    if (newTask !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setInputValue("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        name="task-input"
        placeholder="Enter Task..."
        value={newTask}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="add-task" onClick={addTasks}>
        +
      </button>
    </div>
  );
}
