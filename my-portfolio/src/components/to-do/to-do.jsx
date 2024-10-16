import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import CalendarComponent from "./calendarComponent";
import TaskNotification from "./taskNotification"; // Componenta pentru notificări
import PrioritySelector from "./prioritySelector"; // Selectorul de prioritate
import NotificationPermission from "./notificationPermision"; // Permisiuni pentru notificări

import "./to-do.css";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPriority, setSelectedPriority] = useState("medium");
  const [user, setUser] = useState(null);

  // Funcția pentru încărcarea taskurilor din Firestore
  const loadTodos = async (currentUser) => {
    if (currentUser) {
      try {
        const q = query(
          collection(db, "todos"),
          where("uid", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const loadedTodos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(loadedTodos);
      } catch (error) {
        console.error("Error loading todos:", error.message);
      }
    }
  };

  // Funcție pentru a gestiona autentificarea utilizatorului
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        loadTodos(currentUser);
      } else {
        setUser(null);
        setTodos([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Funcția pentru adăugarea unui task nou
  const addTodo = async () => {
    if (newTodo.trim() === "" || !user) return;

    try {
      const docRef = await addDoc(collection(db, "todos"), {
        task: newTodo,
        uid: user.uid,
        date: selectedDate.toISOString(), // Salvăm data ca string ISO
        priority: selectedPriority,
      });

      setTodos([
        ...todos,
        {
          task: newTodo,
          id: docRef.id,
          date: selectedDate,
          priority: selectedPriority,
        },
      ]);
      setNewTodo("");
      setSelectedDate(new Date());
      setSelectedPriority("medium");
    } catch (error) {
      console.error("Error adding todo:", error.message);
    }
  };

  // Funcția pentru ștergerea unui task
  const deleteTodo = async (id) => {
    if (!user || !id) return;

    try {
      await deleteDoc(doc(db, "todos", id));
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error.message);
    }
  };

  // Funcția pentru ștergerea tuturor taskurilor
  const clearTodos = async () => {
    if (!user) return;

    try {
      const q = query(collection(db, "todos"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(doc(db, "todos", docSnapshot.id));
      });
      setTodos([]);
    } catch (error) {
      console.error("Error clearing todos:", error.message);
    }
  };

  return (
    <div className="container">
      <NotificationPermission /> {/* Permisiune pentru notificări */}
      <div>
        <h1>Todo List</h1>
      </div>
      <div className="add-cont">
        <input
          placeholder="Add new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <CalendarComponent
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <PrioritySelector
          selectedPriority={selectedPriority}
          onPriorityChange={setSelectedPriority}
        />
        <button className="add-btn" onClick={addTodo} disabled={!user}>
          Add Task
        </button>
      </div>
      <button className="clear-btn" onClick={clearTodos} disabled={!user}>
        Delete All Tasks
      </button>
      <ul className="ul">
        {todos.map((todo) => (
          <li key={todo.id} className="li">
            {todo.task}
            <p>Priority: {todo.priority}</p>
            <p>
              Due date:{" "}
              {todo.date
                ? new Date(todo.date).toLocaleDateString()
                : "No date set"}
            </p>
            <TaskNotification task={todo.task} dueDate={todo.date} />
            <button
              className="clear-btn"
              onClick={() => deleteTodo(todo.id)}
              disabled={!user}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
