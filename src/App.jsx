import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext, TodoContextProvider } from './Context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos, settodos] = useState([])

  const addTodo = (todo)=>{
    settodos((prev)=>[{id: Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ? todo:prevTodo))
  }
  const deleteTodo = (id)=>{
    settodos((prev)=> prev.filter((prevTodo)=> prevTodo.id!==id))
  }
  const toggleComplete = (id)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo)))
  }

  useEffect(()=>{
    const res = JSON.parse(localStorage.getItem("todo"));
    if(res && res.length){
      settodos(res)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todo",JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div>
        <div>
          <div>
            <h1>Write todo</h1>
            <TodoForm/>
          </div>
          <div>
            {/*TodoItem with loop */}
           
            {todos.map((todo)=>{
              return(
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            )})}
          </div>
        </div>
      </div>
    </TodoContextProvider >
  )
}

export default App
