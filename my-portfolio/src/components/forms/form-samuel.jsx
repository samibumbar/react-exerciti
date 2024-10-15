import "./form.css";
import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleButtonClick() {
    if (username.length === 0 && password.length === 0) {
      setMessage(
        "Ceva nu  a mers bine te rugam sa incerci din nou mai tarziu "
      );
    } else {
      setMessage("Teai logat cu succes");
    }
  }

  return (
    <>
      <div className="form-container">
        <h2>A doua pagina de logare </h2>
        <input
          type="email"
          placeholder="Type your email here!"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Type your passsword here!"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" onClick={handleButtonClick}>
          Login
        </button>
      </div>

      <label className="message">{message}</label>
    </>
  );
}
export default Form;
