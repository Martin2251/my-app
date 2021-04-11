import React from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const todos = ["Clean Bathroom", "Learn React"];
  return (
    <div>
      <h1>Martin To Do</h1>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
