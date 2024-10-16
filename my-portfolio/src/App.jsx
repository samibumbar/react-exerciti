import { useState, useEffect } from "react";
import "./App.css";
import LoginRegister from "./components/login-register/login-register";
import ToDoApp from "./components/to-do/to-do";
import NavBar from "./components/to-do/nav-bar"; // Importă componenta de nav bar
import { signOut } from "firebase/auth"; // Importă signOut pentru deconectare
import { auth } from "./firebase"; // Asigură-te că ai acces la Firebase auth

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Citim din localStorage dacă utilizatorul a activat Dark Mode
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
  }, []);

  // Functia de deconectare
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User has logged out");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Functia de login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Toggle pentru Dark Mode
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState); // Salvează starea în localStorage
  };

  return (
    <div className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      {isAuthenticated ? (
        <>
          <NavBar
            onLogout={handleLogout}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <ToDoApp />
        </>
      ) : (
        <LoginRegister onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
