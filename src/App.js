import React, { useState, useEffect } from "react";
import fetchService from './service/fetch/fetchService'
import TodoItem from './components/TodoItem/TodoItem'

const App = () => {

    const [todos, setTodos] = useState(null)

    useEffect(() => {
        const getTodos = async () => {
            const result = await fetchService()
            setTodos(result.slice(0,5))
        }
    
        getTodos()

    }, [])

    return (
        <ul>
            {todos ? todos.map(todo=> <TodoItem title={todo.title} key={todo.id}/>) : <span title='loading'>loading...</span>}           
        </ul>
    )
};

    // return (
    //     <div>
    //         <List todos={todos} />
    //     </div>
    // );
;

export default App;
