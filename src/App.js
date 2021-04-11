import React from "react";
import "./App.css";

function App() {
  const todos = ["Clean Bathroom", "Learn React"];
  return (
    <div>
      <h1>Martin To Do</h1>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
}

export default App;
