import "./App.css";
import React, { useState, useEffect } from "react";
import fetchService from "./service/fetch/fetchService";
import Form from "./components/Form/Form";
import List from "./components/List/List";

const App = () => {
  const [todos, setTodos] = useState(null);

  const addTodo = (e) => {
    // add todo
    e.preventDefault();
    setTodos([...todos, { id: getId(), title: e.target.newTodo.value }]);
  };

  const deleteTodo = (id) => {
    // delete todo
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getId = () => {
    // generate a random number for id
    return Math.floor(Math.random() * 100000);
  };

  useEffect(() => {
    // gets the todo data when the page is first loaded
    const getTodos = async () => {
      const result = await fetchService();
      setTodos(result.slice(0, 5));
    };

    getTodos();
  }, []);

  return (
    <div>
      <Form addTodo={addTodo} />
      {todos ? (
        <List todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <span title="loading">loading...</span>
      )}
    </div>
  );
};

export default App;
