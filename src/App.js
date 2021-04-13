import React from "react";
import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
import Card from "./Card";

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
      <Card
        firstName="Martin"
        lastName="Lowe"
        language="Javascript"
        framework="react"
      ></Card>
      <Card
        firstName="Bogdan"
        lastName="Dae"
        language="the oracle"
        framework="vue"
      ></Card>
      <Card
        firstName="Sam"
        lastName="Eve"
        language="Ruby"
        framework="Ember"
      ></Card>
      <Card
        firstName="Dave"
        lastName="ret"
        language="php"
        framework="django"
      ></Card>
    </div>
  );
}

export default App;
