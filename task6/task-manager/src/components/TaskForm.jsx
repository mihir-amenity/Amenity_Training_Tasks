import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      iscompleted: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Create New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
