import React from "react";
import "./nav-bar.css";

function NavBar({ onLogout, toggleDarkMode, isDarkMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <h1> ToDo App</h1>
      <div className="navbar-buttons">
        {/* Buton pentru Dark Mode */}
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* Buton pentru Logout */}
        <button className="logout-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
