import React from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const todos = ["Clean Bathroom", "Learn React", "Code"];
  return (
    <div>
      <h1>Martin To Do</h1>
      <div>
        <input></input>
        <button>Add Todo</button>
      </div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
