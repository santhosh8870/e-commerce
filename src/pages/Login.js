import React, { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" or "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // REGISTER USER
  const registerUser = () => {
    if (!email || !password) {
      return alert("Please fill all fields");
    }

    const existing = JSON.parse(localStorage.getItem("registeredUser"));
    if (existing && existing.email === email) {
      return alert("User already exists! Please login.");
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ email, password })
    );

    alert("Registration successful! Please login.");
    setMode("login"); // switch to login screen
  };

  // LOGIN USER
  const loginUser = () => {
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!savedUser) return alert("No user found. Please register first.");
    if (savedUser.email !== email || savedUser.password !== password) {
      return alert("Invalid email or password");
    }

    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Login successful!");
    window.location.href = "/";
  };

  return (
    <div className="auth-container">
      <h2>{mode === "login" ? "User Login" : "Register"}</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {mode === "login" ? (
        <>
          <button onClick={loginUser}>Login</button>
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setMode("register")}>Register</span>
          </p>
        </>
      ) : (
        <>
          <button onClick={registerUser}>Register</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setMode("login")}>Login</span>
          </p>
        </>
      )}
    </div>
  );
}
