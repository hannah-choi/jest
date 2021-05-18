import React from 'react'

export default function TodoItem({title, id, deleteTodo}) {
    return (
        <li>
            {title} <button title='delete' onClick={()=> deleteTodo(id)}>delete</button>
        </li>
    )
}
