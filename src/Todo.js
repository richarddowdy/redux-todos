import React from "react";

function Todo({ todo, deleteTodo }) {
  const { text } = todo;

  const handleClick = (evt) => {
    deleteTodo(todo);
  }

  return (
    <div>
      <span>{text}</span>
      <button onClick={handleClick}>Remove</button>
    </div>
  )
}

export default Todo;