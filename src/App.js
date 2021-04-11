import React from "react";
import "./App.css";
import Todo from "./Todo";
import { useState } from "react";

//initial state
const initialState = ["Clean Bathroom", "Learn React", "Code"];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [inputValue, setInputValue] = useState("");

  function removeTodo(todo) {
    setTodos(todos.filter((td) => td !== todo));
  }

  return (
    <div>
      <h1>Martin To Do</h1>
      <div>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            //add todo
            setTodos([...todos, inputValue]);
            //clean up
            setInputValue("");
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => (
        <Todo todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default App;
