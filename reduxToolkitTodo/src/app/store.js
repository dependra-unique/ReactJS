import { configureStore } from '@reduxjs/toolkit'

//store ko reducers ki knowledge chahiye eslia import kar rhe hai
import todoReducer from '../features/todo/todoSlice';




export const store = configureStore({
    reducer: todoReducer
})
