import './App.css';
import React, { useState, useEffect } from "react";
import fetchService from './service/fetch/fetchService'
import TodoItem from './components/TodoItem/TodoItem'
import Form from './components/Form/Form';


const App = () => {

    const [todos, setTodos] = useState(null)

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, {id: getId(), title: e.target.newTodo.value}]);
    }

    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo=> todo.id !== id))
    }

    const modifyTodo = (id, newValue) => {
        setTodos(todos.map(todo=> todo.id===id? {...todo, title:newValue} : todo))
    }

    const getId = () => {
        return Math.floor(Math.random()*100000)
    }

    useEffect(() => {
        const getTodos = async () => {
            const result = await fetchService()
            setTodos(result.slice(0,5))
        }
    
        getTodos()

    }, [])

    return (
        <div>
            <Form addTodo={addTodo}/>
        <ul>
            {todos ? todos.map(todo=> <TodoItem title={todo.title} id={todo.id} key={todo.id} modifyTodo={modifyTodo} deleteTodo={deleteTodo}/>) : <span title='loading'>loading...</span>}           
        </ul>
        </div>
    )
};

export default App;
