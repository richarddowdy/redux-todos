import React from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";


function TodoList() {

  const todos = useSelector(store => store.todos)
  const dispatch = useDispatch();

  const deleteTodo = (todo) => {
    dispatch({ type: "DEL_TODO", payload: todo.text })
  };

  return (
    <div>
      {todos.map(todo => 
        <Todo key={todo.text} todo={todo} deleteTodo={deleteTodo} />
      )}
    </div>
  )
}

export default TodoList;

