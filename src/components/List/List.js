import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function List({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          title={todo.title}
          id={todo.id}
          key={todo.id}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
