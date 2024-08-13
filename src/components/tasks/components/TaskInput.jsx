export function TaskInput({ newTask, setInputValue }) {
  return (
    <input
      type="text"
      name="task-input"
      placeholder="Enter Task..."
      value={newTask}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
