import React from 'react'

interface TodoListProps{
    title: string,
    done: boolean
}

export default function Todolist({title, done}: TodoListProps) {
    return (
        <div className="todolist">
            <h2>{title}</h2>
        </div>
    )
}
