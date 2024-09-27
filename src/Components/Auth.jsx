import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser, loginUser } from "../Services/mockApi";
import { saveSession } from "../Utils/storage";
import { UserContext } from "../Context/userContext";
import login from "../assets/login1.jpg";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    if (isLogin) {
      const result = await loginUser(user);
      if (result.success) {
        setUser(result.user.username);
        saveSession(result.user);
        navigate("/tasks");
      } else {
        toast.error(result.message);
      }
    } else {
      const result = await registerUser(user);
      if (result.success) {
        toast.success("Registration successful. Please login.");
        setIsLogin(true);
      } else {
        toast.error(result.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="formImage">
        <img src={login} alt="login" />
      </div>
      <div className="loginFormChild">
        <h2 style={{ color: "#FFF" }}>{isLogin ? "Login" : "Register"}</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              className="auth-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          )}
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="auth-button" type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
          className="auth-toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create an account" : "Already have an account?"}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Auth;
