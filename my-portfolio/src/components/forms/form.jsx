import { useState } from "react";

import "./form.css";

function Form() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleUserNameChange(e) {
    console.log(userName);
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLoginButtonClick() {
    if (userName.length === 0 && password.length === 0) {
      setMessage("Ceva nu a mers bine. Te rugam sa incerci mai tarziu");
    } else {
      setMessage("Te-ai logat cu succes");
    }
  }

  return (
    <>
      <div className="form-container">
        <h2>Bun venit!!!!</h2>
        <input
          type="email"
          placeholder="Email"
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleLoginButtonClick}>
          Login
        </button>
      </div>
      <label className="message">{message}</label>
    </>
  );
}

export default Form;
