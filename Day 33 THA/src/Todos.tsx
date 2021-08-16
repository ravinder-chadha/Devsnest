import React, { useState } from "react";
import Todolist from "./Todolist";

interface TodoType {
  title: string;
  done: boolean;
}


const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [input, setInput] = useState<string>("");
    return (
        <div className="todos">
            <input
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button onClick={() => {
                setTodos([
                    ...todos,
                    {title : input, done: false},
                ])
                setInput("");
        }}>Add Todo</button>  
        {todos.map((todo, index) => (
          <Todolist title={todo.title} done={todo.done} />
        ))}
      </div>
    );
}

export default Todos;
