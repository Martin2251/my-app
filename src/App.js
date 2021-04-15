import React from "react";
import "./App.css";
import Todo from "./Todo";
import { useState, useEffect } from "react";

//initial state
//const initialState = ["Clean Bathroom", "Learn React", "Code"];

function getTodoFromLocalStorage() {
  let todosString = localStorage.getItem("todos");
  if (todosString.length > 0) {
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
