import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default TodoContainer;