import React, {useState} from 'react'
import { useTodo } from '../Context/TodoContext'
function TodoForm() {
    const [todo,settodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault();

        if(!todo) return

        addTodo({todo, completed : false});
        settodo("")
    }

 return (
    <>
        <form onSubmit={add}>
            <input type="text" value={todo} placeholder='Add Your List' onChange={(e)=> settodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </>
  )
}

export default TodoForm