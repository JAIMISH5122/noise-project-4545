import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

const handleLogin = (e) => {
  e.preventDefault();

  if (user.email === "" || user.password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  alert("Login Successful");
  navigate("/");
};

  return (
    <div className="login-container">
      <div className="login-box">
  <h1 style={{color:"black"}}>noice</h1>


        <h3>Login</h3>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}