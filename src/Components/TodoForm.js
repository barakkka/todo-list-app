import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const insert = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div className="container">
      <form className="todo-form">
        {props.edit ? (
          <>
            <input
              id="editInput"
              placeholder="Upadte Your Item"
              autoFocus
              onChange={insert}
              value={input}
            ></input>
            <button id="editButton" type="submit" onClick={handleSubmit}>
              Edit Todo
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              autoFocus
              onChange={insert}
              value={input}
            ></input>
            <button type="submit" onClick={handleSubmit}>
              Add Todo
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
