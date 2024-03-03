import React, {useState} from 'react'
import { useTodo } from '../contexts';
function TodoForm() {
    //ye form hai eslia add karna hoga todo ko state bana kar add kar to 
    //aur todo milega useTodo() se because useTodo() ne pura todoContext abstract kar lia hai(matlab useContext(todoContext))

    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        //hume addTodo mein object pass kaena padega beacuse hum todo ko add karte time use ek id dege aur uska name(matlab todoTitle) and completed ko by default false kar dege
        //id humne eslia remove kar di yha se because id hum phle hi use de chuke hai Date.now() method se
        addTodo({todo , completed: false})
        // setTodo eslia kia hai taki jab hum add kar de todo ko , to todo variable ko khali karna padega beacuse ek bar add hogyi to user dobara kuch add karvayega(matlab state add karvayega)
        setTodo("")
    }

    return (
      <form onSubmit= {add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    );
  }
  

export default TodoForm
