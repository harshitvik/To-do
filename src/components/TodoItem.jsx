import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function TodoItem({todo}) {
    
    const {toggleComplete, deleteTodo} = useTodo();
  return (
    <>
        <div>
            <input type="checkbox" checked= {todo.completed} onChange={()=>toggleComplete(todo.id)} />
            <input type="text" value={todo.todo} className = {`${todo.completed ? 'text-gray-400 line-through': 'text-black'}`} />
            <button onClick={()=> (deleteTodo(todo.id))}>❌</button>
            
        </div>
    </>
  )
}

export default TodoItem