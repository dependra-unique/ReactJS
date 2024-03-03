
import './App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'




function App() {

// // localStorage access karne ki kossis kar rha tha but localStorage access nhi hua mujhse

//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     const todos = JSON.parse( localStorage.getItem("todos"))
    
//     if(todos && todos.lenght > 0){
//       setTodos(todos)
//     }
//   }, [])

//  useEffect(() => {
//   localStorage.setItem("todos", JSON.stringify(todos))
//  }, [todos])



  return (
    <Provider store={store}>
     <h1>Redux toolkit Project</h1>
     <AddTodo />
     <Todos />
    </Provider>
  )
}

export default App
