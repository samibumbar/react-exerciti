import { useState } from "react";
import "./to-do.css";

function ToDoApp() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo === 0) return;
    setTodo([...todos, newTodo]);
    setNewTodo("");
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };
  return (
    <div className="container">
      <div>
        <h1>A simple Todo List</h1>
      </div>
      <div className="add-cont">
        <input
          placeholder="Add new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-btn" onClick={addTodo}>
          Add{" "}
        </button>
      </div>

      <ul className="ul">
        {todos.map((todo, index) => (
          <li key={index} className="li">
            {todo}
            <textarea
              className="description"
              placeholder="About Task"
            ></textarea>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
