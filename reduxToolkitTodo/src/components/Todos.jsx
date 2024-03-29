import React from 'react'

// todos ko list karne ke lia useSelector ka use karte hai, eslia useSelector ko import kia hai
// Humare pass todos list hogi us list mein se todo ko delete karna pad sakta hai , jab todo delete hoga to store ke andar value mein bhi change karna padega , store ki value mein Dispatcher hi change kar sakta hai eslia useDispatch bhi import karna padega
import {useSelector, useDispatch} from 'react-redux'

//dispatcher reducer ka use karke hi store ki values mein change karta hai eslia reducers ko bhi import karna hoga
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    //useSelector ko state ka access milta hai
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    return (
        <>
            <div className='text-orange-700 text-3xl'>
                Todo
            </div>

            {/* //main logic yhi hai es logic ko style karne ke lia taki page par sahi dekhe kuch tailwind use kar leta hu neeche
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}

                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    >X</button>
                </li>
            ))} */}


            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                    className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                    key={todo.id}
                    >
                    <div className='text-white'>{todo.text}</div>
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                    </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
