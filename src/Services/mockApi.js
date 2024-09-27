let users = JSON.parse(localStorage.getItem("users")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskId = localStorage.getItem("taskId")
  ? parseInt(localStorage.getItem("taskId"))
  : 1;

export const registerUser = async (user) => {
  if (users.some((u) => u.email === user.email)) {
    return { success: false, message: "User already exists" };
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
};

export const loginUser = async (user) => {
  const foundUser = users.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (foundUser) return { success: true, user: foundUser };
  return { success: false, message: "Invalid credentials" };
};

export const fetchTasks = async () => {
  return tasks;
};

export const addTask = async (task) => {
  const newTask = { id: taskId++, ...task, completed: false };
  tasks.push(newTask);

  // Update localStorage for tasks and taskId
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("taskId", taskId.toString()); // Persist taskId

  return newTask;
};

export const updateTask = async (id, title) => {
  tasks = tasks.map((t) => (t.id === id ? { ...t, title } : t));
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const completeTask = async (id) => {
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const deleteTask = async (id) => {
  tasks = tasks.filter((t) => t.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
