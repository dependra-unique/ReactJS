import { createSlice, nanoid } from '@reduxjs/toolkit'

//initialState is nothing but a object
const initialState = {
    todos: [
        {
            id: 1,
            text: 'Hello Dependra'
        }
    ]
}

//slice is nothing but a part of global solution(ye global solution ka ek small part hai)
//take 1st props => name,
//take 2st props => initialState,
//take 3rd props => reducers{ reducers ek object hi hai eske andar property and methods likhte shi },
//


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // user ne action mein kuch id di hogi, us todo ki id ko match karo , aur todo ko remove kar do
            //hum esme filter ka use kar lege , filter se kaam karayege ki jis todo ki id match nhi kar rhi hai use us todo ko return kara do jisse todo ki id vo bhi match karegi vo apne aap remove ho jayegi

            //state.todos mein  eslia assign kia hai taki automatic override ho jay sabhi property
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },


        // // updateTodo mene khud hi banaya hai
        // updateTodo: (state, action) => {
        //     const todoId = state.todos.map((todo) => todo.id == action.payload)

        //     state.todos.push({id: nanoid, text: action.payload})
        // }
    }
})

//individual reducers ko eslia export karna padta hai becaue ye reducers components mein kaam aayege
export const {addTodo, removeTodo} = todoSlice.actions

//reducers, store mein register karne padege because store ek restricted store hai, store reducers se hi value lega state manage karne ke lia eslia reducers ko register karna padta hai store mein

export default todoSlice.reducer