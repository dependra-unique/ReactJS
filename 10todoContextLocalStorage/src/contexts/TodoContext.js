import {createContext, useContext} from 'React'

const todoContext = createContext({
    todos: [
        {
            id: 1,
            todoTitle: "Learn js",
            completed: false,
        }
    ],
    addTodo: (todoTitle) =>{},
    updatedTodo: (id, todoTitle) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
})
export default todoContext


export const useTodo = () =>{
    return useContext(todoContext)
}

export const TodoContextProvider = todoContext.Provider