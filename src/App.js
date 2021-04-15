import React from "react";
import "./App.css";
import Todo from "./Todo";
import { useState, useEffect } from "react";

//initial state
//const initialState = ["Clean Bathroom", "Learn React", "Code"];

function getTodoFromLocalStorage() {
  let todosString = localStorage.getItem("todos");
  if (todosString && todosString.length > 0) {
    return todosString.split(",");
  } else {
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(getTodoFromLocalStorage());
  const [inputValue, setInputValue] = useState("");

  function removeTodo(todo) {
    setTodos(todos.filter((td) => td !== todo));
  }

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  return (
    <div id="app">
      <h1 className="todos-title">Martin To Do</h1>
      <div className="input-row"></div>
      <div>
        <input
          className="add-todo-input"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          className="submit-button"
          onClick={(e) => {
            if (inputValue && inputValue.length > 0) {
              //add todo
              setTodos([...todos, inputValue]);
              //clean up
              setInputValue("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
      <p>
        You have <strong>{todos.length}</strong> tasks in progress
      </p>
    </div>
  );
}

export default App;
