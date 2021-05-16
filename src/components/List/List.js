import React from "react";
import ListItem from "../ListItem/ListItem";

export default function List({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <ListItem key={todo.id} text={todo.title} id={todo.id} />
            ))}
        </ul>
    );
}
