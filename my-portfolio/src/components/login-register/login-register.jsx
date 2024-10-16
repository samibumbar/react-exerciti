import "./login.css";
import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function LoginRegister({ onLogin, onLogout }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Starea pentru comutare între login și register

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in user:", userCredential.user);
      onLogin();
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Error: " + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registered user:", userCredential.user);
      onLogin();
    } catch (error) {
      console.error("Error registering:", error.message);
      alert("Error: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      onLogout();
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <div>
      {isRegistering ? (
        <div className="login-container">
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-btn" type="submit">
              Register
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <button
              className="register-page"
              onClick={() => setIsRegistering(false)}
            >
              Login
            </button>
          </p>
        </div>
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <button
              className="register-page"
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;
