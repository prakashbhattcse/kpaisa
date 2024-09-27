import React, { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import { UserContext } from "../Context/userContext";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { fetchTasks } from "../Services/mockApi";
import usericon from "../assets/usericon.png";

const TaskList = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const loadTasks = async () => {
      const taskList = await fetchTasks();
      setTasks(taskList);
    };

    // Fetch tasks only on initial mount
    loadTasks();
  }, [setTasks]);

  return (
    <div className="tasklist-container">
      <div className="userDetail">
        <span>
          <h3>Welcome {user}</h3>
          <img src={usericon} alt="usericon" />
        </span>
      </div>

      <AddTask />
      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
