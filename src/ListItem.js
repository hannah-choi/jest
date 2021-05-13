import React from 'react'

export default function ListItem({todoItem, className}) {
    return (
        <li data-testid='list-item' className={className}>
            {todoItem}
            <button data-testid='button'>{className}</button>
        </li>
    )
}
