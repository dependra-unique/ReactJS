import { useState } from 'react'
import './App.css'
import TodoContextProvider from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  // prev previous state deta hai(es method mein humne new todo add ki hai random id assign karke,,,,, sabhi todo object ki form mein hai object mein ek id assign ki hai Date.now() method se)
  const addTodo = ( todoTitle) =>{
    setTodos(((prev) => [{id: Date.now(), ...todoTitle}, ...prev]))
  }
  
  //todos ek array hai jo useState ne return kia hai
  //esme hume ek id and todoTitle(new name of todo item) ki jarurat hogi todo ko update karnr ke lia
  //prev ek array hai jis par map function se loop chalaya hai esse humare pass ek-ek value aayegi array ki ,jisko humne prevtodo name dia hai ,,, hum prevtodo ki id match karenge current id se jo hume pass ki gyi hai, ydi id match ho gyi to new name ko update kar dege, aur ydi id match nhi kari to prevTodo hi rhne dege
  //esme prevTodo ek object hai
  const updatedTodo = (id, todoTitle) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todoTitle : prevTodo)))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  return (
    <TodoContextProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">{/* Todo form goes here */}</div>
        <div className="flex flex-wrap gap-y-3">
        {/*Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
