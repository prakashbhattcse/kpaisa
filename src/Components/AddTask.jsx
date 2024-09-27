import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { addTask } from "../Services/mockApi";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const { setTasks } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure a valid title
    if (title.trim() === "") return;

    // Add new task via API
    const newTask = await addTask({ title });

    // Update state without refetching tasks
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear the input field after adding the task
    setTitle("");
  };

  return (
    <div className="task-form">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          className="add-task-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
          required
        />
        <button className="add-task-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
