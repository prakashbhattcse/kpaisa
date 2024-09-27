# Task Management App

This is a simple Task Management App built using React, which allows users to register, log in, and manage their tasks. The app includes task creation, task completion, and task deletion functionalities, with persistent storage in the browser's `localStorage`. Users' sessions are also stored locally to simulate authentication.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [How to Use](#how-to-use)
6. [Additional Information](#additional-information)

---

## Features

- **User Authentication:** Users can register and log in with an email and password.
- **Session Storage:** User session data is stored in `localStorage`.
- **Task Management:** 
  - Users can create, edit, and delete tasks.
  - Mark tasks as completed or uncompleted.
  - Tasks are persisted between page reloads using `localStorage`.
- **React Context API:** Used to manage global task states across components.
- **Toast Notifications:** Visual feedback is provided using `react-toastify`.

---

## Project Structure

```bash
.
├── public
│   └── index.html           # Main HTML file
├── src
│   ├── Components
│   │   ├── AddTask.jsx       # Form for adding new tasks
│   │   ├── Auth.jsx          # Handles user login and registration
│   │   ├── TaskItem.jsx      # Individual task component for rendering task details
│   │   └── TaskList.jsx      # List of all tasks
│   ├── Context
│   │   ├── TaskContext.jsx   # Context provider for task management
│   │   └── userContext.jsx   # Context provider for user authentication
│   ├── Services
│   │   └── mockApi.js        # Mock API simulating backend interactions for users and tasks
│   ├── Utils
│   │   └── storage.js        # Utility functions for session management
│   ├── App.js                # Main React component for routing
│   ├── index.js              # Entry point for the React application
│   └── styles.css            # Styling for the application
└── package.json              # Project dependencies and scripts
```

### Key Files
- **`AddTask.jsx`**: A form to input new tasks.
- **`Auth.jsx`**: Handles user authentication (login and registration) and session management.
- **`TaskItem.jsx`**: Displays individual task details, including edit and delete options.
- **`TaskList.jsx`**: Displays a list of all tasks.
- **`mockApi.js`**: Simulates backend API for user registration, login, and task management.
- **`storage.js`**: Provides helper functions to save and retrieve user session data from `localStorage`.
- **`TaskContext.jsx`**: Manages global task data using React's Context API.
- **`userContext.jsx`**: Manages global user data using React's Context API.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Handles navigation between different components/pages.
- **React Context API**: For state management across components.
- **react-toastify**: Provides toast notifications for user feedback.
- **LocalStorage**: Used to persist user session and task data.

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-management-app.git
```

### 2. Install Dependencies
Run the following command to install the necessary dependencies.
```bash
npm install
```

### 3. Run the Project
To start the development server, use the command:
```bash
npm run dev
```


---

## How to Use

1. **Register** a new user by filling out the registration form.
2. **Login** with your registered email and password.
3. Once logged in, you will be redirected to the **Task Management** page.
4. **Add a task**, edit the task title, **mark it as complete**, or **delete tasks**.
5. All tasks and session data will be stored in your browser's `localStorage`.

---

## Additional Information

- **Session Management**: The user session is stored using `localStorage`, so the login state persists even after refreshing the browser or reopening the application.
- **Task Management**: Tasks are stored in `localStorage` as well, and task IDs are auto-incremented and stored to avoid duplicates.
- **React Context**: Task data is managed using React Context (`TaskContext`) so that tasks can be accessed and modified from any component in the app.
- **Toast Notifications**: Feedback is provided via `react-toastify` for success or error messages during authentication and task operations.

---
