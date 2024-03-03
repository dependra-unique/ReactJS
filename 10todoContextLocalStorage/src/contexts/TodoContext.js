import {createContext, useContext} from 'react'

//this is context creation
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn js",
            completed: false,
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
})



export const useTodo = () => {
    return useContext(TodoContext)
}


export const TodoContextProvider = TodoContext.Provider