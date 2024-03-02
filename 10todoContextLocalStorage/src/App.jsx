import React, { useEffect, useState } from 'react'

import './App.css'
import { TodoContextProvider } from './contexts'
import {TodoForm, TodoItem} from './components'

function App() {
  const [todos, setTodos] = useState([])

  // prev previous state deta hai(es method mein humne new todo add ki hai random id assign karke,,,,, sabhi todo object ki form mein hai object mein ek id assign ki hai Date.now() method se)
  const addTodo = ( todo) =>{
    setTodos(((prev) => [{id: Date.now(), ...todo}, ...prev]))
  }
  
  //todos ek array hai jo useState ne return kia hai
  //esme hume ek id and todoTitle(new name of todo item) ki jarurat hogi todo ko update karnr ke lia
  //prev ek array hai jis par map function se loop chalaya hai esse humare pass ek-ek value aayegi array ki ,jisko humne prevtodo name dia hai ,,, hum prevtodo ki id match karenge current id se jo hume pass ki gyi hai, ydi id match ho gyi to new name ko update kar dege, aur ydi id match nhi kari to prevTodo hi rhne dege
  //esme prevTodo ek object hai
  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }


  //localStorage concept => for more info learn through website
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    // jab humare pass todos ho aur todos ki length greater than zero ho to hume web page par todos ko set karvana hai
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //ydi hume localSorage mein kuch data set karvana ho to
  useEffect(() => {
    // humere pass data array ki form mein hai ,aur localStroge data ko string ki form mein leta hai, to hume data ko json mein convert karna padega
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
        {/*Loop and Add TodoItem here */}

        {todos.map((todo) => (
          <div
          key={todo.id}
          className='w-full'
          >
            <TodoItem todo={todo}/>
          </div>
        ))}
        </div>
      </div>
    </div>
    </TodoContextProvider>
  )
}

export default App
