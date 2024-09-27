import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import { completeTask, deleteTask, updateTask } from "../Services/mockApi";

const TaskItem = ({ task }) => {
  const { setTasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleComplete = async () => {
    await completeTask(task.id);
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  const handleUpdate = async () => {
    await updateTask(task.id, newTitle);
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, title: newTitle } : t))
    );
    setIsEditing(false);
  };

  return (
    <div className="taskItemContainer">
      <li className="task-item">
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={{
              padding: ".4rem",
              fontSize: "1.2rem",
              width: "60%",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "grey ",
              textTransform: "capitalize",
            }}
          />
        ) : (
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </span>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleComplete}
          />
          {isEditing ? (
            <button className="task-button update" onClick={handleUpdate}>
              Save
            </button>
          ) : (
            <button
              className="task-button edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          <button className="task-button delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TaskItem;
