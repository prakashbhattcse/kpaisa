import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth";
import TaskList from "./Components/TaskList";
import { TaskProvider } from "./Context/TaskContext";
import { UserProvider } from "./Context/userContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <TaskProvider>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Auth />} />
              <Route path="/tasks" element={<TaskList />} />
            </Routes>
          </div>
        </TaskProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
