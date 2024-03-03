import React, { useState } from 'react'
import { useTodo } from '../contexts';


//ye {todo} pura ek object hai ese humne todo name dia hai 
function TodoItem({ todo }) {
    // to check todo is editable or not (but humne by default todo ko not editable rakha hai,, false karke state ko)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    //user jo bhi input mein dega, us input ko lelege (humne us input ko todoMsg name dia hai)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    //functionality todoContext se lelege (humne es functionality ko bind kar rakha hai useTodo hook banakar)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    //function who edit the todo
    const editTodo = ( ) => {
        //todo ko update karne ke lia ek id chahiye
        //mein pura todo leluga spread karke , aur usme keval todo property ko edit kar duga
        updateTodo(todo.id, {...todo, todo: todoMsg})

        //ek bar editable hone ke bad, mein use not editable kar duga (false karke)
        setIsTodoEditable(false)
    }


    //ab hume toggle wala functionality ko call karna padega toggle karne ke lia id chahiye
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;
  
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    );
  }
  
  export default TodoItem;
